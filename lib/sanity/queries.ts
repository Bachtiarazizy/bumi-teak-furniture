export const allProductsQuery = `
  *[_type == "product"] | order(featured desc, _createdAt desc) {
    _id,
    name,
    slug,
    price,
    "collection": collection->title,
    "collectionSlug": collection->slug.current,
    "mainImage": images[0] {
      asset,
      alt
    },
    featured,
    inStock,
    rating,
    reviewCount
  }
`;

export const featuredProductsQuery = `
  *[_type == "product" && featured == true] | order(featured desc, _createdAt desc)[0...6] {
    _id,
    name,
    slug,
    price,
    "collection": collection->title,
    "mainImage": images[0] {
      asset,
      alt
    },
    featured,
    inStock,
    rating,
    reviewCount
  }
`;

export const filteredProductsQuery = `
  *[_type == "product" 
    && (!defined($categories) || category->slug.current in $categories)
    && (!defined($collections) || collection->slug.current in $collections)
    && (!defined($minPrice) || price >= $minPrice)
    && (!defined($maxPrice) || price <= $maxPrice)
    && (!defined($inStockOnly) || $inStockOnly == false || inStock == true)
  ] | order(
    select(
      $sortBy == "price-asc" => price asc,
      $sortBy == "price-desc" => price desc,
      $sortBy == "name-asc" => name asc,
      $sortBy == "name-desc" => name desc,
      $sortBy == "newest" => _createdAt desc,
      featured desc
    )
  ) {
    _id,
    name,
    slug,
    price,
    "category": category->name,
    "categorySlug": category->slug.current,
    "collection": collection->title,
    "collectionSlug": collection->slug.current,
    "mainImage": images[0] {
      asset,
      alt
    },
    featured,
    inStock,
    rating,
    reviewCount
  }
`;

export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    price,
    sku,
    inStock,
    rating,
    reviewCount,
     "collection": collection-> {
      _id,
      name,
      title,
      slug
    },
    images[] {
      asset,
      alt
    },
    specifications,
    reviews[] {
      author,
      rating,
      date,
      comment,
      verified
    },
    featured,
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      ogTitle,
      ogDescription,
      ogImage {
        asset,
        alt
      },
      twitterCard,
      canonicalUrl,
      noIndex,
      noFollow
    }
  }
`;

export const relatedProductsQuery = `
  *[_type == "product" 
    && slug.current != $slug 
    && defined(collection._ref)
    && collection._ref == $collectionRef
  ][0...4] {
    _id,
    name,
    slug,
    price,
    "collection": collection->title,
    "mainImage": images[0] {
      asset,
      alt
    }
  }
`;

// Collections Queries
export const allCollectionsQuery = `
  *[_type == "collection"] | order(order asc, title asc) {
    _id,
    title,
    slug,
    description,
    image {
      asset,
      alt
    },
    "productCount": count(*[_type == "product" && references(^._id)])
  }
`;
// Query untuk initial load tanpa filter
export const collectionProductsInitialQuery = `
  *[_type == "product" && collection._ref == $collectionId] 
  | order(featured desc, _createdAt desc) {
    _id,
    name,
    slug,
    price,
    "category": category->name,
    "mainImage": images[0] {
      asset,
      alt
    },
    featured,
    inStock,
    rating,
    reviewCount
  }
`;

// Query dengan filter lengkap untuk client-side filtering
export const collectionProductsQuery = `
  *[_type == "product" && collection._ref == $collectionId
    && (!defined($minPrice) || price >= $minPrice)
    && (!defined($maxPrice) || price <= $maxPrice)
    && (!defined($inStockOnly) || $inStockOnly == false || inStock == true)
  ] | order(
      $sortBy == "price-asc" => price,
      $sortBy == "price-desc" => price desc,
      $sortBy == "name-asc" => name,
      $sortBy == "name-desc" => name desc,
      $sortBy == "newest" => _createdAt desc,
      featured desc
  ) {
    _id,
    name,
    slug,
    price,
    "category": category->name,
    "mainImage": images[0] {
      asset,
      alt
    },
    featured,
    inStock,
    rating,
    reviewCount
  }
`;

export const collectionBySlugQuery = `
  *[_type == "collection" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image {
      asset,
      alt
    },
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      ogTitle,
      ogDescription,
      ogImage {
        asset,
        alt
      },
      twitterCard,
      canonicalUrl,
      noIndex,
      noFollow
    }
  }
`;

// Blog Queries
export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "author": author->{
      name,
      slug
    },
    "category": category->{
      name,
      slug
    },
    mainImage {
      asset,
      alt
    },
    featured,
    tags
  }
`;

export const filteredBlogPostsQuery = `
  *[_type == "blogPost"
    && (!defined($category) || $category == "all" || category->slug.current == $category)
    && (!defined($searchTerm) || title match $searchTerm + "*" || excerpt match $searchTerm + "*")
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "author": author->{
      name,
      slug
    },
    "category": category->{
      name,
      slug
    },
    mainImage {
      asset,
      alt
    },
    featured,
    tags
  }
`;

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "author": author->{
      name,
      slug,
      image,
      bio
    },
    "category": category->{
      _id,
      name,
      slug
    },
    mainImage {
      asset,
      alt
    },
    body,
    featured,
    tags,
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      ogTitle,
      ogDescription,
      ogImage {
        asset,
        alt
      },
      twitterCard,
      canonicalUrl,
      noIndex,
      noFollow
    }
  }
`;

export const relatedBlogPostsQuery = `
  *[_type == "blogPost" 
    && slug.current != $slug 
    && category._ref == $categoryRef
  ][0...3] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "category": category->name,
    mainImage {
      asset,
      alt
    }
  }
`;

// Categories Query
export const categoriesQuery = `
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    "count": count(*[_type == "product" && references(^._id)])
  }
`;

export const blogCategoriesQuery = `
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    "postCount": count(*[_type == "blogPost" && references(^._id)])
  }
`;

// Guides Queries
export const allGuidesQuery = `
  *[_type == "guide"] | order(featured desc, order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    readTime,
    image {
      asset,
      alt
    },
    downloadable,
    featured
  }
`;

export const featuredGuideQuery = `
  *[_type == "guide" && featured == true][0] {
    _id,
    title,
    slug,
    description,
    category,
    readTime,
    image {
      asset,
      alt
    },
    downloadable
  }
`;

export const guideBySlugQuery = `
  *[_type == "guide" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    category,
    readTime,
    image {
      asset,
      alt
    },
    downloadable,
    "pdfUrl": pdfFile.asset->url,
    content,
    featured,
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      ogTitle,
      ogDescription,
      ogImage {
        asset,
        alt
      },
      twitterCard,
      canonicalUrl,
      noIndex,
      noFollow
    }
  }
`;

// FAQs Query
export const allFaqsQuery = `
  *[_type == "faq"] | order(category asc, order asc, question asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`;

export const faqCategoriesQuery = `
  array::unique(*[_type == "faq"].category)
`;

// Gallery Query
export const galleryImagesQuery = `
  *[_type == "galleryImage"
    && (!defined($category) || $category == "All" || category == $category)
  ] | order(order asc, _createdAt desc) {
    _id,
    title,
    image {
      asset
    },
    category,
    location
  }
`;

export const galleryCategoriesQuery = `
  array::unique(*[_type == "galleryImage"].category)
`;
