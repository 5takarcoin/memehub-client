function GalleryItem({ item }) {
  return (
    <div
      className="flex"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <img
        className="rounded-2xl w-full object-cover"
        src={item.media}
        alt="item"
      />
    </div>
  );
}

export default GalleryItem;
