import StoryblokClient from "storyblok-js-client";

const storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
});

export const getProducts = async () => {
  try {
    const response = await storyblok.get("cdn/stories", {
      starts_with: "products/",
      version: "published", // Use 'published' if you only want published content
    });
    return response.data.stories;
  } catch (error) {
    console.error("Storyblok API error:", error);
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
};

export const getTour = async () => {
  try {
    const response = await storyblok.get("cdn/stories", {
      starts_with: "tour/",
      version: "published", // Use 'published' if you only want published content
    });
    return response.data.stories;
  } catch (error) {
    console.error("Storyblok Tour API error:", error);
    throw new Error(`Failed to fetch tours: ${error.message}`);
  }
};

export const getAbout = async () => {
  try {
    const response = await storyblok.get("cdn/stories", {
      starts_with: "about/",
      version: "published",
    });
    return response.data.stories;
  } catch (error) {
    console.error("Storyblok About API error:", error);
    throw new Error(`Failed to fetch about content: ${error.message}`);
  }
};

export const getParagraphOne = async () => {
  try {
    const response = await storyblok.get(
      "cdn/stories/about/about-paragraph-one",
      {
        version: "published",
      }
    );
    return response.data.story;
  } catch (error) {
    console.error("Storyblok ParagraphOne API error:", error);
    throw new Error(`Failed to fetch paragraph one: ${error.message}`);
  }
};

export const getParagraphTwo = async () => {
  try {
    const response = await storyblok.get(
      "cdn/stories/about/about-paragraph-two",
      {
        version: "published",
      }
    );
    return response.data.story;
  } catch (error) {
    console.error("Storyblok ParagraphTwo API error:", error);
    throw new Error(`Failed to fetch paragraph two: ${error.message}`);
  }
};

export const getParagraphThree = async () => {
  try {
    const response = await storyblok.get(
      "cdn/stories/about/about-paragraph-three",
      {
        version: "published",
      }
    );
    return response.data.story;
  } catch (error) {
    console.error("Storyblok ParagraphThree API error:", error);
    throw new Error(`Failed to fetch paragraph three: ${error.message}`);
  }
};

export const getParagraphFour = async () => {
  try {
    const response = await storyblok.get(
      "cdn/stories/about/about-paragraph-four",
      {
        version: "published",
      }
    );
    return response.data.story;
  } catch (error) {
    console.error("Storyblok ParagraphFour API error:", error);
    throw new Error(`Failed to fetch paragraph four: ${error.message}`);
  }
};

export default storyblok;
