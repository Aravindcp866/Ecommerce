import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const linkFields = /* groq */ `
  link {
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current
        }
      }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        ${linkFields},
      }
    },
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`);

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);



export const listProduct = defineQuery(`*[_type == 'Stocks']{
  ...,
 "image" :productImage {
    asset->{
      _ref,
      url,
      _type,
      altText,
      description,
      "tags": opt.media.tags[]->name.current,
      title
    }
  }
}`)


export const fetchProduct = defineQuery(
  `*[_type == 'Stocks' && _id == $productId]{
    ...,
    "image": productImage {
      asset->{
        _ref,
        url,
        _type,
        altText,
        description,
        "tags": opt.media.tags[]->name.current,
        title
      }
    }
  }[0]`
);

export const fetchProductWithRating = defineQuery(
  `*[_type == 'Stocks' && _id ==$productId]{
  ...,
  "image" :productImage {
    asset->{
      _ref,
      url,
      _type,
      altText,
      description,
      "tags": opt.media.tags[]->name.current,
      title
    }
  },
  "customerReview":customerReview->
}[0]`
);

export const fecthHomeSliderImage = defineQuery(`
  *[_type == 'homeSliderImage' ][0]{
'image':HomePageSliderImages[]{
  asset->{url,_ref,altText,description,}
}
}`)




export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkFields}
    }
  },
    ${postFields}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);
