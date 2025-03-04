export const createError = (msg: string, status: number) => ({ msg, status });

export const notFoundError = (resource: string) =>
  createError(`${resource} not found`, 404);
