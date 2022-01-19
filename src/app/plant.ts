export interface Plant{
    groupId: string; 
    title: {
    content: string;  
    }
    imageLink: string;
    minPrice: {
        value?: number;
        currency?: string
    }
    maxPrice?: {
        value?: number;
        currency?: string
    }
    categoryIdentifier?: string;
    quantitySold?: string;
    discount?: boolean;
    originalPrice: {
        value: number;
        currency?: string
    }
    quantityLimitPerBuyer?: number;
    priceDisplayCondition?: string;
    itemGroup?: string;
}