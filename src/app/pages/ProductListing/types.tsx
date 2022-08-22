/* --- STATE --- */
export interface ProductListingState {
    loading: boolean;
    data: {
        categoriesRes: [], productsRes: []
    };
    error: string;
}
