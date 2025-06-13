
const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-obsidian/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-cinzel text-4xl text-molten-gold mb-12">THE GALLERY OF LEGENDS</h2>
        
        <div className="bg-obsidian/30 p-8 rounded-lg border border-molten-gold/30">
          <div 
            dangerouslySetInnerHTML={{
              __html: `<script src="https://static.elfsight.com/platform/platform.js" async></script><div class="elfsight-app-d9a3c1c3-6340-4c1b-a811-622557b9b979" data-elfsight-app-lazy></div>`
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
