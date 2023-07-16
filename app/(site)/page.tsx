import Header from '@/components/Header';
import ListItem from '@/components/ListItem';

export default function Home() {
  return (
    <div className="bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto">
      <Header>
        <div>
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-3
              mt-4
            "
          >
            <ListItem
              name="Liked Songs"
              imageSrc="/images/liked.png"
              href="liked"
            />
          </div>
        </div>
      </Header>

      <div className="mt-2 mb-7 mx-6">
        <div className="text-white text-2xl font-semibold">
          <h1>Newest songs</h1>
        </div>

        <div>List of songs!</div>
      </div>
    </div>
  );
}
