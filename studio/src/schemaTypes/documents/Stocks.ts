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
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ]
})