// types for button component
export interface props  {
    children: any;
    onClick?: () => void;
}

// types for form components
export type IFormProps = {
    "on-submit": (payload: { title: string; description: string; price: string, rate: string }) => void;
}
export interface IProduct {
    title: string;
    price: string;
    description: string;
    rating: string;

}

// types for post components
export interface IPostsProps {
    products: any;
    onFav: (id: Number) => void;
}

// types for shop-app components
export type ApiData = {
    id : Number
    title: string;
    price: string;
    description: string;
  }




