export interface PathItem {
   title: string;
   href: string;
   navigateTo?: string;
   getDynamicHref?: (value: string) => string;
}

export interface Path {
   root: PathItem;
   users: {
      root: PathItem;
      items: {
         user: PathItem;
      };
   };
}
