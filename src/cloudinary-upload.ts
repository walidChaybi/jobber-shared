import cloudinary, {
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';

export function upload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'auto',
      },
      (
        err: UploadApiErrorResponse | undefined,
        res: UploadApiResponse | undefined
      ) => {
        if (err) return resolve(err);
        resolve(res);
      }
    );
  });
}

export function videoUpload(
  file: string,
  public_id: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        chunk_size: 50000,
        resource_type: 'video',
      },
      (
        err: UploadApiErrorResponse | undefined,
        res: UploadApiResponse | undefined
      ) => {
        if (err) return resolve(err);
        resolve(res);
      }
    );
  });
}
