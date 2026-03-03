import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BookOpen, Rocket, Star, Globe, Layers, ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Misteri Black Hole di Pusat Galaksi",
    category: "Galaksi",
    excerpt: "Bagaimana lubang hitam supermasif mempengaruhi evolusi galaksi Bima Sakti kita?",
    content: "Lubang hitam supermasif, Sagittarius A*, terletak di jantung galaksi Bima Sakti. Dengan massa jutaan kali lipat dari Matahari kita, objek ini menciptakan gravitasi yang begitu kuat sehingga cahaya pun tidak bisa lepas. Penelitian terbaru menunjukkan bahwa lubang hitam ini tidak hanya 'memakan' materi di sekitarnya, tetapi juga berperan penting dalam pembentukan bintang baru di lengan galaksi melalui pancaran energi yang masif.",
    image: "https://picsum.photos/seed/galaxy/800/400"
  },
  {
    id: 2,
    title: "Misi Artemis: Kembali ke Bulan",
    category: "Teknologi Roket",
    excerpt: "NASA bersiap mengirimkan manusia kembali ke permukaan bulan untuk pertama kalinya dalam 50 tahun.",
    content: "Program Artemis bertujuan untuk mendaratkan wanita pertama dan orang kulit berwarna pertama di Bulan. Menggunakan roket Space Launch System (SLS) yang merupakan roket terkuat yang pernah dibangun, misi ini akan membangun pangkalan permanen di kutub selatan Bulan. Ini adalah langkah awal sebelum umat manusia melangkah lebih jauh ke Planet Mars.",
    image: "https://picsum.photos/seed/rocket/800/400"
  },
  {
    id: 3,
    title: "Eksoplanet Mirip Bumi Ditemukan",
    category: "Planet",
    excerpt: "Teleskop James Webb mendeteksi atmosfer di planet yang berada di zona layak huni bintang jauh.",
    content: "Penemuan planet ekstrasurya di sistem TRAPPIST-1 telah memicu harapan baru dalam pencarian kehidupan di luar Bumi. Beberapa planet di sistem ini berada pada jarak yang tepat dari bintang induknya sehingga air cair mungkin ada di permukaannya. Analisis spektroskopi menunjukkan adanya jejak karbon dioksida dan metana, yang merupakan indikator potensial aktivitas biologis.",
    image: "https://picsum.photos/seed/planet/800/400"
  },
  {
    id: 4,
    title: "Kematian Bintang: Supernova Spektakuler",
    category: "Bintang",
    excerpt: "Apa yang terjadi ketika sebuah bintang kehabisan bahan bakar nuklirnya?",
    content: "Ketika bintang masif mencapai akhir hidupnya, ia meledak dalam peristiwa yang disebut Supernova. Ledakan ini begitu terang sehingga bisa mengungguli seluruh galaksi selama beberapa minggu. Sisa-sisa ledakan ini menyebarkan elemen berat seperti emas, perak, dan besi ke seluruh alam semesta, yang nantinya akan menjadi bahan baku pembentukan planet dan kehidupan.",
    image: "https://picsum.photos/seed/star/800/400"
  }
];

export const Articles: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'Planet', 'Bintang', 'Galaksi', 'Teknologi Roket'];
  const filteredArticles = filter === 'Semua' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
              <div>
                <button
                  onClick={onBack}
                  className="mb-6 flex items-center gap-2 text-white/40 hover:text-white transition-colors font-orbitron text-[10px] tracking-[0.3em]"
                >
                  <ArrowLeft size={14} /> KEMBALI KE HUB
                </button>
                <h1 className="eac-logo-text text-4xl md:text-5xl font-black tracking-tighter">WARTA ANTARIKSA</h1>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full font-orbitron text-[9px] tracking-[0.2em] transition-all border ${filter === cat ? 'bg-white text-black border-white' : 'bg-white/[0.02] text-white/40 border-white/10 hover:border-white/30'}`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredArticles.map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedArticle(article)}
                  className="group glass rounded-[2.5rem] overflow-hidden cursor-pointer hover:bg-white/[0.05] transition-all duration-500 border border-white/5 hover:border-white/20"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-white text-black px-4 py-1 rounded-full font-orbitron text-[8px] font-bold tracking-widest">
                      {article.category.toUpperCase()}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="font-orbitron text-xl font-bold mb-4 tracking-widest group-hover:text-white transition-colors leading-tight">{article.title}</h3>
                    <p className="text-xs text-white/40 line-clamp-2 mb-8 font-light leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-3 text-[9px] font-orbitron font-bold text-white/60 group-hover:text-white transition-all tracking-[0.2em]">
                      BACA SELENGKAPNYA <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="read"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="mb-10 flex items-center gap-2 text-white/40 hover:text-white transition-colors font-orbitron text-[10px] tracking-[0.3em]"
            >
              <ArrowLeft size={14} /> KEMBALI KE DAFTAR
            </button>

            <article className="glass rounded-[3rem] overflow-hidden border border-white/5">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="p-10 md:p-20">
                <div className="flex items-center gap-6 mb-10">
                  <span className="bg-white/5 text-white/60 px-5 py-1.5 rounded-full font-orbitron text-[9px] font-bold tracking-[0.3em] border border-white/10">
                    {selectedArticle.category.toUpperCase()}
                  </span>
                  <span className="text-white/20 text-[9px] font-orbitron tracking-[0.2em]">EST. 5 MIN READ</span>
                </div>
                <h1 className="font-orbitron text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tighter">{selectedArticle.title}</h1>
                <div className="prose prose-invert max-w-none">
                  <p className="text-xl text-white/70 leading-relaxed font-light font-sans">
                    {selectedArticle.content}
                  </p>
                  <div className="my-12 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-lg text-white/50 leading-relaxed font-light font-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


