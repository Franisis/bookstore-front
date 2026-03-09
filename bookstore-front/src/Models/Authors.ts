export interface Author extends AuthorCreate{
    id: string;
}

export interface AuthorCreate 
{
    birthDate: Date;
    name: string;
    description:string;
    image: string;

}