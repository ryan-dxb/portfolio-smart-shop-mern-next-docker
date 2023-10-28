import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Star,
  Twitter,
} from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";

interface SingleProductPageProps {}

const SingleProductPage: NextPage<SingleProductPageProps> = () => {
  return (
    <main className="mt-6 content-container">
      <section className="grid grid-cols-3 gap-x-12">
        <div className="w-full col-span-1 ">
          <div className="relative w-full h-96">
            <Image
              src="/product-single-1.jpg"
              alt="product"
              fill
              sizes="100%"
              className="object-cover w-full h-full"
            />
          </div>

          <Separator className="my-4" />
          <div className="grid grid-cols-4 gap-x-2">
            <div className="relative w-full border aspect-square">
              <Image
                src="/product-single-1.jpg"
                alt="product"
                fill
                sizes="100%"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-full border aspect-square ">
              <Image
                src="/product-single-2.jpg"
                alt="product"
                fill
                sizes="100%"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-full border aspect-square ">
              <Image
                src="/product-single-3.jpg"
                alt="product"
                fill
                sizes="100%"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative w-full border aspect-square ">
              <Image
                src="/product-single-4.jpg"
                alt="product"
                fill
                sizes="100%"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full col-span-2 ">
          {/* Product Summary */}
          <div className="flex flex-col ">
            <h1 className="text-3xl font-semibold">Men Black Sports Shoes</h1>

            <div className="flex flex-row pt-1 space-x-3">
              {/* Rating */}

              <div className="flex flex-row items-center space-x-1">
                {/* Rating */}
                {/* Create 5 stars and fill it with ratings */}

                {new Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={`${
                      i < 4 ? "text-yellow-400 fill-yellow-400" : ""
                    }`}
                  />
                ))}
              </div>
              <p>
                <span className="text-xs text-primary">( 200 Reviews )</span>
              </p>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Product Price */}
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <p className="text-2xl font-semibold">$ 200.00</p>
              <p className="ml-2 text-xs font-semibold line-through text-muted-foreground/70">
                $ 300.00
              </p>
            </div>
            <p className="text-xs text-red-500/70">Inclusive of all taxes</p>
          </div>

          <div className="flex flex-col mt-4">
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              quia odio atque, itaque culpa perferendis ullam modi deleniti
              consectetur distinctio autem excepturi? Quasi numquam facere
              perspiciatis quaerat vel cumque alias.
            </p>
          </div>

          <div className="flex flex-col mt-6 space-y-2">
            <div className="flex flex-row items-center space-x-2">
              <p className="inline-block w-16 text-xs text-gray-500">SKU:</p>
              <p className="text-sm font-semibold">35814636</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p className="inline-block w-16 text-xs text-gray-500">
                Category:
              </p>
              <p className="text-sm font-semibold">Shoes</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p className="inline-block w-16 text-xs text-gray-500">Tags:</p>
              <p className="text-sm font-semibold">Shoes, Footwear, Sports</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-row items-center mt-4 space-x-2">
              <p className="inline-block w-16 text-xs text-gray-500">Size:</p>

              <div className="flex flex-row items-center justify-center w-8 h-8 border cursor-pointer hover:border-primary">
                <p className="text-sm font-semibold">S</p>
              </div>
              <div className="flex flex-row items-center justify-center w-8 h-8 border cursor-pointer hover:border-primary">
                <p className="text-sm font-semibold">M</p>
              </div>
              <div className="flex flex-row items-center justify-center w-8 h-8 border cursor-pointer hover:border-primary">
                <p className="text-sm font-semibold">L</p>
              </div>
              <div className="flex flex-row items-center justify-center w-8 h-8 border cursor-pointer hover:border-primary">
                <p className="text-sm font-semibold">XL</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-row items-center mt-4 space-x-2">
              <p className="inline-block w-16 text-xs text-gray-500">Color:</p>

              <div
                className="flex flex-row items-center justify-center w-8 h-8 border cursor-pointer hover:border-primary"
                style={{ backgroundColor: "#000000" }}
              />
              <div
                className="flex flex-row items-center justify-center w-8 h-8 border cursor-pointer hover:border-primary"
                style={{ backgroundColor: "#ffffff" }}
              />
              <div
                className="flex flex-row items-center justify-center w-8 h-8 border cursor-pointer hover:border-primary"
                style={{ backgroundColor: "#ff0000" }}
              />
              <div
                className="flex flex-row items-center justify-center w-8 h-8 border cursor-pointer hover:border-primary"
                style={{ backgroundColor: "#00ff00" }}
              />
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-row mt-6 space-x-4">
            <div className="flex flex-row">
              <Button variant={"outline"} className="w-10 h-10 rounded-none">
                <span className="text-sm font-semibold">-</span>
              </Button>
              <div className="w-10 h-10 border-y">
                <Input
                  className="w-10 text-center bg-transparent border-none rounded-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={1}
                />
              </div>
              <Button variant={"outline"} className="w-10 h-10 rounded-none ">
                <span className="text-sm font-semibold ">+</span>
              </Button>
            </div>
            <Button className="w-40 transition-all duration-200 rounded-none bg-primary opacity-80 hover:opacity-100 hover:bg-primary">
              <span className="text-sm font-semibold ">Add to Cart</span>
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-row items-center space-x-6">
            <div className="flex flex-row items-center space-x-3">
              <div className="cursor-pointer group">
                <div className="p-2 text-gray-500 transition-all duration-200 border rounded-full group-hover:border-primary">
                  <Facebook
                    size={18}
                    className="text-gray-500 transition-all duration-200 group-hover:fill-primary fill-gray-500 group-hover:text-primary"
                  />
                </div>
              </div>
              <div className="p-2 text-gray-500 transition-all duration-200 border rounded-full cursor-pointer hover:text-primary hover:border-primary hover:fill-primary">
                <Twitter size={18} className="" />
              </div>
              <div className="p-2 text-gray-500 transition-all duration-200 border rounded-full cursor-pointer hover:text-primary hover:border-primary hover:fill-primary">
                <Instagram size={18} className="" />
              </div>
              <div className="p-2 text-gray-500 transition-all duration-200 border rounded-full cursor-pointer hover:text-primary hover:border-primary hover:fill-primary">
                <Linkedin size={18} className="" />
              </div>
            </div>

            <div className="flex flex-row space-x-2 cursor-pointer group">
              <Heart
                size={18}
                className="transition-all duration-200 cursor-pointer group-hover:text-primary group-hover:fill-primary fill-transparent"
              />
              <span className="text-sm font-semibold transition-all duration-200 group-hover:text-primary">
                Add to Wishlist
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 mt-8 border">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="">
            <TabsTrigger value="description" className="w-52">
              Product Description
            </TabsTrigger>
            <TabsTrigger value="review" className="w-52">
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </TabsContent>
          <TabsContent value="review" className="mt-6">
            <div className="w-full p-4 border">
              <div className="flex flex-col items-start space-y-1">
                <p className="text-xl font-semibold text-gray-900">
                  Customer Review
                </p>
                <div className="flex flex-row items-center space-x-1">
                  {/* Rating */}
                  {/* Create 5 stars and fill it with ratings */}

                  {new Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={`${
                        i < 4 ? "text-yellow-400 fill-yellow-400" : ""
                      }`}
                    />
                  ))}

                  <p className="text-sm">
                    Based on{" "}
                    <span className="text-xs text-primary">200 Reviews</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col mt-8 space-y-2">
                <ReviewItem />
              </div>

              <div className="w-full p-4 mt-8 border ">
                <div className="flex flex-col items-start space-y-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Add a Review
                  </p>

                  {/* Form */}
                  <div className="w-full p-6 bg-gray-100">
                    <div className="flex flex-row space-x-2">
                      <Label className="">Your Rating: </Label>
                      <div className="flex flex-row items-center space-x-1">
                        {/* Rating */}
                        {/* Create 5 stars and fill it with ratings */}

                        {new Array(5).fill(0).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < 4 ? "text-yellow-400 fill-yellow-400" : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col mt-4">
                      <Label className="">Your Review: </Label>
                      <textarea
                        className="w-full h-24 p-2 mt-2 border resize-none "
                        rows={4}
                        placeholder="Write your review here..."
                      />
                    </div>

                    <div className="flex flex-row justify-end mt-4">
                      <Button className="w-40 transition-all duration-200 rounded-none bg-primary opacity-80 hover:opacity-100 hover:bg-primary">
                        <span className="text-sm font-semibold ">Submit</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

const ReviewItem = ({}) => {
  return (
    <div className="flex flex-row items-center space-x-10">
      <div className="relative w-20 h-20 border">
        <Image
          src="/user-1.jpg"
          alt="product"
          fill
          sizes="100%"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative flex flex-col w-full p-6 bg-gray-100">
        <div className="absolute left-0 w-8 h-8 rotate-45 -translate-x-1/2 -translate-y-1/2 bg-gray-100 top-1/2" />
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row items-center space-x-1">
            <p className="text-sm font-semibold text-gray-900">Harshil Patel</p>
            <span>-</span>
            <p className="text-sm font-light text-gray-500">2 days ago</p>
          </div>

          <div className="flex flex-row space-x-1">
            {new Array(5).fill(0).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${i < 4 ? "text-yellow-400 fill-yellow-400" : ""}`}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-700 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia
            odio atque, itaque culpa perferendis ullam modi deleniti consectetur
            distinctio autem excepturi? Quasi numquam facere perspiciatisQuam
            quia odio
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
