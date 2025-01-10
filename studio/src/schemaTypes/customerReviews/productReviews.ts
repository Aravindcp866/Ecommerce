// schemas/productReview.js
export default {
    name: 'productReview',
    title: 'Product Review',
    type: 'document',
    fields: [
      {
        name: 'productId',
        title: 'Product ID',
        type: 'string',
        description: 'Unique identifier for the product being reviewed',
      },
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
        description: 'Name of the customer who wrote the review',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'Rating given by the customer (1 to 5)',
        validation: (Rule: any) => Rule.min(1).max(5),
      },
      {
        name: 'review',
        title: 'Review',
        type: 'text',
        description: 'The actual review text provided by the customer',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        description: 'Date when the review was submitted',
      },
      {
        name: 'media',
        title: 'Media',
        type: 'array',
        of: [{ type: 'file' }],
        description: 'Upload media files related to the review',
        validation: (Rule: any) => 
          Rule.custom((files: any[]) => {
            if (!files) return true; // Allow empty uploads
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
            const maxSize = 5 * 1024 * 1024; // 5 MB
            for (const file of files) {
              if (!validTypes.includes(file.mimeType)) {
                return 'Only JPEG, PNG, GIF images and MP4 videos are allowed.';
              }
              if (file.size > maxSize) {
                return 'File size must be less than 5 MB.';
              }
            }
            return true; // All checks passed
          }),
      },
    ],
  };