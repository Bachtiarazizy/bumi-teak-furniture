import React from "react";
import Image from "next/image";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

interface BlogContentProps {
  content?: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <section className="bg-white pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Social Share Sidebar - Desktop */}
            {/* <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <button className="w-full p-3 text-secondary hover:bg-secondary/10 rounded transition-colors" aria-label="Share">
                  <Share2 className="w-5 h-5 mx-auto" />
                </button>
                <button className="w-full p-3 text-secondary hover:bg-secondary/10 rounded transition-colors" aria-label="Share on Facebook">
                  <Facebook className="w-5 h-5 mx-auto" />
                </button>
                <button className="w-full p-3 text-secondary hover:bg-secondary/10 rounded transition-colors" aria-label="Share on Twitter">
                  <Twitter className="w-5 h-5 mx-auto" />
                </button>
                <button className="w-full p-3 text-secondary hover:bg-secondary/10 rounded transition-colors" aria-label="Share on LinkedIn">
                  <Linkedin className="w-5 h-5 mx-auto" />
                </button>
              </div>
            </div> */}

            {/* Main Content */}
            <div className="lg:col-span-11">
              <article className="prose prose-lg max-w-none">
                {/* Introduction */}
                <p className="font-body text-secondary text-lg leading-relaxed mb-6">
                  Indonesian teak has been revered for centuries as one of the world&apos;s finest hardwoods. Its journey from the lush forests of Java to homes around the globe is a testament to the enduring relationship between nature,
                  craftsmanship, and human ingenuity.
                </p>

                <p className="font-body text-secondary text-sm leading-relaxed mb-8">
                  In this article, we&apos;ll explore the rich heritage of Indonesian teak furniture, the traditional techniques that make each piece unique, and why investing in authentic teak furniture is a decision that transcends
                  generations.
                </p>

                {/* Section 1 */}
                <h3 className="font-heading text-3xl text-secondary mt-12 mb-6">The Legacy of Indonesian Teak</h3>

                <p className="font-body text-secondary text-sm leading-relaxed mb-6">
                  Teak (Tectona grandis) has been Indonesia&apos;s most prized timber for over 400 years. The Dutch colonizers first recognized its exceptional properties in the 17th century, using it extensively for shipbuilding due to its
                  natural resistance to water, insects, and decay. Today, Indonesian teak remains the gold standard for premium furniture.
                </p>

                <p className="font-body text-secondary text-sm leading-relaxed mb-8">
                  What makes Indonesian teak special is not just the wood itself, but the centuries-old expertise in harvesting, seasoning, and crafting it into furniture that lasts for generations. The artisans of Jepara, Central Java,
                  have been perfecting their craft since the 16th century, passing down techniques from master to apprentice.
                </p>

                {/* Quote */}
                <blockquote className="border-l-4 border-secondary pl-6 my-8 italic text-secondary/80">
                  <p className="font-body text-lg leading-relaxed mb-2">&quot;Each piece of teak tells a story—from the forest where it grew, through the hands that shaped it, to the home where it will live for generations.&quot;</p>
                  <footer className="font-body text-sm text-secondary/60 mt-2">— Bambang Sutanto, Master Craftsman</footer>
                </blockquote>

                {/* Section 2 */}
                <h3 className="font-heading text-3xl text-secondary mt-12 mb-6">Traditional Craftsmanship Meets Modern Design</h3>

                <p className="font-body text-secondary text-sm leading-relaxed mb-6">
                  The creation of authentic Indonesian teak furniture is a labor of love that combines time-honored techniques with contemporary design sensibilities. Our master craftsmen use traditional joinery methods like mortise and
                  tenon joints, ensuring structural integrity without relying on modern adhesives or metal fasteners.
                </p>

                {/* Image */}
                <div className="relative h-96 rounded-lg overflow-hidden my-8">
                  <Image src="/images/crafting-story.jpg" alt="Craftsman working on teak furniture" fill className="object-cover" />
                  <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm font-body p-4">A master craftsman carefully hand-finishing a teak dining table</p>
                </div>

                <p className="font-body text-secondary text-sm leading-relaxed mb-8">
                  The process begins with selecting premium-grade teak logs that have been naturally air-dried for 12-18 months. This patient approach allows the wood to reach optimal moisture content naturally, preventing the warping and
                  cracking that can occur with kiln-dried lumber.
                </p>

                {/* Section 3 */}
                <h3 className="font-heading text-3xl text-secondary mt-12 mb-6">Sustainability and Environmental Responsibility</h3>

                <p className="font-body text-secondary text-sm leading-relaxed mb-6">
                  Today&apos;s teak furniture industry has evolved significantly from its historical practices. We work exclusively with FSC-certified forests where sustainable harvesting practices ensure that for every tree harvested,
                  multiple saplings are planted. This commitment to reforestation means that Indonesian teak forests are actually growing, not shrinking.
                </p>

                <p className="font-body text-secondary text-sm leading-relaxed mb-8">
                  Our partnership with local communities extends beyond fair wages. We invest in education programs that teach sustainable forestry practices and traditional woodworking skills to the next generation of craftsmen, ensuring
                  that both the forests and the craft survive for centuries to come.
                </p>

                {/* List */}
                <h3 className="font-heading text-2xl text-secondary mt-10 mb-4">Why Choose Indonesian Teak Furniture?</h3>

                <ul className="space-y-3 mb-8">
                  <li className="font-body text-secondary text-sm leading-relaxed flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>
                      <strong>Exceptional Durability:</strong> Natural oils make teak resistant to water, insects, and decay
                    </span>
                  </li>
                  <li className="font-body text-secondary text-sm leading-relaxed flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>
                      <strong>Timeless Beauty:</strong> Rich golden-brown color that develops a distinguished patina over time
                    </span>
                  </li>
                  <li className="font-body text-secondary text-sm leading-relaxed flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>
                      <strong>Superior Craftsmanship:</strong> Each piece hand-finished by master artisans
                    </span>
                  </li>
                  <li className="font-body text-secondary text-sm leading-relaxed flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>
                      <strong>Sustainable Choice:</strong> Responsibly sourced from certified forests
                    </span>
                  </li>
                  <li className="font-body text-secondary text-sm leading-relaxed flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>
                      <strong>Investment Value:</strong> Quality that lasts generations, often becoming family heirlooms
                    </span>
                  </li>
                </ul>

                {/* Conclusion */}
                <h3 className="font-heading text-3xl text-secondary mt-12 mb-6">A Lasting Investment</h3>

                <p className="font-body text-secondary text-sm leading-relaxed mb-6">
                  Choosing Indonesian teak furniture is more than a purchase—it&apos;s an investment in quality, sustainability, and cultural heritage. Each piece carries with it the story of ancient forests, skilled craftsmen, and a
                  commitment to preserving both natural resources and traditional skills.
                </p>

                <p className="font-body text-secondary text-sm leading-relaxed mb-8">
                  As you consider adding teak furniture to your home, remember that you&apos;re not just buying a table or chair. You&apos;re becoming part of a centuries-old tradition of excellence, supporting sustainable forestry
                  practices, and bringing a piece of Indonesian craftsmanship into your daily life.
                </p>
              </article>

              {/* Mobile Share Buttons */}
              <div className="lg:hidden mt-12 pt-8 border-t border-secondary/10">
                <p className="font-body text-sm text-secondary mb-4">Share this article:</p>
                <div className="flex gap-3">
                  <button className="p-3 border border-secondary/20 rounded hover:bg-secondary/10 transition-colors">
                    <Facebook className="w-5 h-5 text-secondary" />
                  </button>
                  <button className="p-3 border border-secondary/20 rounded hover:bg-secondary/10 transition-colors">
                    <Twitter className="w-5 h-5 text-secondary" />
                  </button>
                  <button className="p-3 border border-secondary/20 rounded hover:bg-secondary/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
