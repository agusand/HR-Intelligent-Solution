export default interface RequestOptions {
  endpointRoute: string;
  method: string;
  body?: string;
  headers?: HeadersInit;
  signal?: AbortSignal;
}
