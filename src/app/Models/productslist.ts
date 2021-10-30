export interface Productslist {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: [
    {
      id: number;
      name: string;
      year: number;
      color: string;
      pantone_value: string;

    }
  ];
}
