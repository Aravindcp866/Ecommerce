export const HomeSlider = {
    name: 'homeSliderImage',
    title: 'Home Slider',
    type: 'document',
    fields: [
        {
            name: 'HomePageSliderImages',
            title: 'Home Page Slider Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    title: 'Home Page Slider Image',
                    options: {
                        hotspot: true, // Enable hotspot for image cropping and resizing
                    },
                },
            ],
        },
    ],
};
