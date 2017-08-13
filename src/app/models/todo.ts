/**
 * The todo interface model.
 */
export interface ITodo {
  id?: number;            // The id is optional, as new instances either have id = 0, or null.
  title: string;          // The todo title
  body: string;           // The todo body
}
