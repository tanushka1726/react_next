'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface BookFormValues {
  thumbnail: FileList | null;
  pricing: string;
  description: string;
}

export default function AddBookPage() {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookFormValues>({
    defaultValues: {
      thumbnail: null,
      pricing: '',
      description: '',
    },
  });

  // Watch thumbnail to update preview
  const watchThumbnail = watch('thumbnail');

  // Update preview when thumbnail changes
  const onThumbnailChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  const onSubmit = (data: BookFormValues) => {
    console.log('Form data:', data);
    // Add saving logic here later
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Book</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Thumbnail Upload */}
        <div>
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-2">
            Thumbnail Image
          </label>
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            {...register('thumbnail', {
              required: 'Thumbnail image is required',
              onChange: (e) => onThumbnailChange(e.target.files),
            })}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
            "
          />
          {errors.thumbnail && (
            <p className="mt-2 text-sm text-red-600">{errors.thumbnail.message}</p>
          )}
          {preview && (
            <img
              src={preview}
              alt="Thumbnail preview"
              className="mt-4 max-h-48 rounded-lg border border-gray-300 object-contain mx-auto"
            />
          )}
        </div>

        {/* Pricing */}
        <div>
          <label htmlFor="pricing" className="block text-sm font-medium text-gray-700 mb-2">
            Pricing ($)
          </label>
          <input
            type="text"
            id="pricing"
            placeholder="Enter price e.g. 9.99"
            {...register('pricing', {
              required: 'Pricing is required',
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: 'Please enter a valid price, e.g. 9.99',
              },
            })}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.pricing ? 'border-red-500' : ''
            }`}
          />
          {errors.pricing && (
            <p className="mt-2 text-sm text-red-600">{errors.pricing.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            rows={6}
            placeholder="Write a description about the book..."
            {...register('description', {
              required: 'Description is required',
            })}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
              errors.description ? 'border-red-500' : ''
            }`}
          />
          {errors.description && (
            <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Book
        </button>
      </form>
    </div>
  );
}

