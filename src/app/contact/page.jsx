import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="flex gap-10 mt-10">
      <div className="flex-1">
        <h1 className="font-bold text-2xl">Contact page</h1>
        <p className="mt-10">
          Eros gravida fringilla letius taciti hendrerit porttitor sagittis
          risus aenean donec semper diam elit mauris curabitur suscipit senectus
          vitae duis malesuada vestibulum at lobortis lacinia massa ultricies
          penatibus ad nam tristique habitant vivamus dui sodales
        </p>
      </div>
      <div className="flex-1">
        <form className="flex flex-col gap-4">
          <input
            className="border p-4 w-full"
            name="username"
            type="text"
            placeholder="Name"
          />
          <input
            className="border p-4 w-full"
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="border p-4 w-full"
            name="phone"
            type="text"
            placeholder="Phone"
          />
          <textarea
            className="border p-4 w-full"
            name="message"
            rows="15"
            placeholder="Message"
          ></textarea>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
