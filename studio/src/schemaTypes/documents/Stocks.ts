import { DocumentTextIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const Stocks = defineType({
    name: 'Stocks',
    title: 'StockList',
    icon: DocumentTextIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'stockName',
            title: 'Stock Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'stockID',
            title: 'Stock Id',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'productImage',
            title: 'Product Image',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'supportedSize',
            title: 'Supported Size',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'XL', value: 'xl' },
                    { title: 'L', value: 'l' },
                    { title: 'M', value: 'm' },
                    { title: 'S', value: 's' },
                ],
            },
            validation: (rule) => rule.required().min(1),
        }),
        
        defineField({
            name: 'productDescription',
            title: 'Description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'customerReview',
            title: 'Rating',
            type: "reference",
            to: [{ type: 'productReview' }]
        })
    ]
})