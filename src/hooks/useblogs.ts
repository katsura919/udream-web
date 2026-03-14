import api from "@/utils/api";

export interface PublicBlog {
  _id: string;
  title: string;
  featuredImage?: string;
  category?: string;
  slug: string;
  createdAt: string;
}

export interface PublicBlogPagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PublicBlogsResponse {
  data: PublicBlog[];
  pagination: PublicBlogPagination;
}

export interface PublicBlogsParams {
  businessId?: string;
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
}

// Get public blogs for landing page
export const getPublicBlogs = async (
  params?: PublicBlogsParams,
): Promise<PublicBlogsResponse> => {
  const businessId = params?.businessId || process.env.NEXT_PUBLIC_BUSINESS_ID;
  const response = await api.get<PublicBlogsResponse>(`/businesses/${businessId}/blogs`, {
    params: {
      search: params?.search || undefined,
      status: params?.status || undefined,
      page: params?.page?.toString() || "1",
      limit: params?.limit?.toString() || "10",
    },
  });
  return response.data;
};

// Get blog by slug (full content)
export const getBlogBySlug = async (slug: string) => {
  const response = await api.get(`/blogs/slug/${slug}`);
  return response.data;
};
