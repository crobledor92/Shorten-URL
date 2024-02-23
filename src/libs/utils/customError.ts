export class CustomError extends Error {
    code?: string;
  
    constructor(message: string, code?: string) {
      super(message);
      this.name = 'CustomError';
      this.code = code;
      // Ensure the correct prototype chain
      Object.setPrototypeOf(this, CustomError.prototype);
    }
  }