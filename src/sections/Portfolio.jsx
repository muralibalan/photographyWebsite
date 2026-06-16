import { useState } from 'react';
import { Grid, Container, Box, Typography, Button, ImageList, ImageListItem, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// 1. மெயின் கேட்டகிரி கார்டுகள்
const mainCategories = [
  { id: 'tamil', title: 'Tamil Wedding', cover: '/wedding1.jpg', tagline: 'Traditional Temple Rituals' },
  { id: 'christian', title: 'Christian Wedding', cover: '/Christain-wedding1.jpg', tagline: 'The Elegant Church Walk' },
  { id: 'telugu', title: 'Telugu Wedding', cover: '/telungu.jpg', tagline: 'Royal Mangalasutram Moments' },
  { id: 'prewedding', title: 'Pre Wedding', cover: '/prewedding1.jpg', tagline: 'Every Frame Tells a Love Story' },
  { id: 'films', title: 'Cinematic Films', cover: '/engagement.jpeg', tagline: 'Watch Our Beautiful Stories' },
];

// 2. சப்-போர்ட்ஃபோலியோ தரவுகள்
const subPortfolioData = {
  tamil: [
    { id: 101, type: 'Wedding Images', src: '/wedding1.jpg' },  
    { id: 102, type: 'Wedding Images', src: '/wedding2.jpg' },  
    { id: 103, type: 'Wedding Images', src: '/wedding3.jpg' },
    { id: 104, type: 'Wedding Images', src: '/wedding4.jpg' },
    { id: 105, type: 'Wedding Images', src: '/wedding5.jpg' },  
    { id: 106, type: 'Wedding Images', src: '/wedding6.jpg' },
    { id: 107, type: 'Wedding Images', src: '/wedding7.jpg' },
    { id: 108, type: 'Wedding Images', src: '/wedding8.jpg' },
    { id: 109, type: 'Wedding Images', src: '/wedding9.jpg' },
    { id: 110, type: 'Wedding Images', src: '/wedding10.jpg' },
    { id: 111, type: 'Wedding Images', src: '/wedding11.jpg' },
    { id: 112, type: 'Wedding Images', src: '/wedding12.jpg' },            
    { id: 113, type: 'Wedding Images', src: '/wedding13.jpg' },
    { id: 114, type: 'Wedding Images', src: '/wedding14.jpg' },
    { id: 115, type: 'Wedding Images', src: '/wedding15.jpg' },
    { id: 116, type: 'Wedding Images', src: '/wedding16.jpg' },
    { id: 117, type: 'Wedding Images', src: '/wedding17.jpg' },
    { id: 118, type: 'Wedding Images', src: '/wedding18.jpg' },    
    { id: 119, type: 'Wedding Images', src: '/wedding19.jpg' }, 
    { id: 120, type: 'Wedding Images', src: '/wedding20.jpg' }, 
  ],
  christian: [
    { id: 201, type: 'Wedding Images', src: '/Christain-wedding1.jpg' },
    { id: 202, type: 'Wedding Images', src: '/Christain-wedding2.jpg' },
    { id: 203, type: 'Wedding Images', src: '/Christain-wedding3.jpg' },
    { id: 204, type: 'Wedding Images', src: '/Christain-wedding4.jpg' },
    { id: 205, type: 'Wedding Images', src: '/Christain-wedding5.jpg' },
    { id: 206, type: 'Wedding Images', src: '/Christain-wedding6.jpg' },
    { id: 207, type: 'Wedding Images', src: '/Christain-wedding7.jpg' },
    { id: 208, type: 'Wedding Images', src: '/Christain-wedding8.jpg' },       
    { id: 209, type: 'Wedding Images', src: '/Christain-wedding9.jpg' }, 
    { id: 210, type: 'Wedding Images', src: '/Christain-wedding10.jpg' }, 
    { id: 211, type: 'Wedding Images', src: '/Christain-wedding11.jpg' },
    { id: 212, type: 'Wedding Images', src: '/Christain-wedding12.jpg' },  
    { id: 213, type: 'Wedding Images', src: '/Christain-wedding13.jpg' }, 
    { id: 214, type: 'Wedding Images', src: '/Christain-wedding14.jpg' }, 
    { id: 215, type: 'Wedding Images', src: '/Christain-wedding15.jpg' }, 
    { id: 216, type: 'Wedding Images', src: '/Christain-wedding16.jpg' }, 
    { id: 217, type: 'Wedding Images', src: '/Christain-wedding17.jpg' }, 
    { id: 218, type: 'Wedding Images', src: '/Christain-wedding18.jpg' },
    { id: 219, type: 'Wedding Images', src: '/Christain-wedding19.jpg' },
    { id: 220, type: 'Wedding Images', src: '/Christain-wedding20.jpg' },  
  ],
  prewedding: [
    { id: 301, type: 'Pre-Wedding', src: '/prewedding1.jpg' },
    { id: 302, type: 'Pre-Wedding', src: '/prewedding2.jpg' },
    { id: 303, type: 'Pre-Wedding', src: '/prewedding3.jpg' },
    { id: 304, type: 'Pre-Wedding', src: '/prewedding4.jpg' },
    { id: 305, type: 'Pre-Wedding', src: '/prewedding5.jpg' },
    { id: 306, type: 'Pre-Wedding', src: '/prewedding6.jpg' },
    { id: 307, type: 'Pre-Wedding', src: '/prewedding7.jpg' },
    { id: 308, type: 'Pre-Wedding', src: '/prewedding8.jpg' },
    { id: 309, type: 'Pre-Wedding', src: '/prewedding9.jpg' },
    { id: 310, type: 'Pre-Wedding', src: '/prewedding10.jpg' },
    { id: 311, type: 'Pre-Wedding', src: '/prewedding11.jpg' },
    { id: 312, type: 'Pre-Wedding', src: '/prewedding12.jpg' },
    { id: 313, type: 'Pre-Wedding', src: '/prewedding13.jpg' },
    { id: 314, type: 'Pre-Wedding', src: '/prewedding14.jpg' },
    { id: 315, type: 'Pre-Wedding', src: '/prewedding15.jpg' },
    { id: 316, type: 'Pre-Wedding', src: '/prewedding16.jpg' },
    { id: 317, type: 'Pre-Wedding', src: '/prewedding17.jpg' },
    { id: 318, type: 'Pre-Wedding', src: '/prewedding18.jpg' },
    { id: 319, type: 'Pre-Wedding', src: '/prewedding19.jpg' },
    { id: 320, type: 'Pre-Wedding', src: '/prewedding20.jpg' },
    { id: 321, type: 'Pre-Wedding', src: '/christianpre1.jpg' },
    { id: 322, type: 'Pre-Wedding', src: '/christianpre2.jpg' },
    { id: 323, type: 'Pre-Wedding', src: '/christianpre3.jpg' },
    { id: 324, type: 'Pre-Wedding', src: '/christianpre4.jpg' },
    { id: 325, type: 'Pre-Wedding', src: '/christianpre5.jpg' },
    { id: 326, type: 'Pre-Wedding', src: '/christianpre6.jpg' },
    { id: 327, type: 'Pre-Wedding', src: '/christianpre7.jpg' },
    { id: 328, type: 'Pre-Wedding', src: '/christianpre8.jpg' },
    { id: 329, type: 'Pre-Wedding', src: '/christianpre9.jpg' },
    { id: 330, type: 'Pre-Wedding', src: '/christianpre10.jpg' },
    { id: 331, type: 'Pre-Wedding', src: '/christianpre11.jpg' },
    { id: 332, type: 'Pre-Wedding', src: '/christianpre12.jpg' },
    { id: 333, type: 'Pre-Wedding', src: '/christianpre13.jpg' },
    { id: 334, type: 'Pre-Wedding', src: '/christianpre14.jpg' },
    { id: 335, type: 'Pre-Wedding', src: '/christianpre15.jpg' },
    { id: 336, type: 'Pre-Wedding', src: '/christianpre16.jpg' },
    { id: 337, type: 'Pre-Wedding', src: '/christianpre17.jpg' },
    { id: 338, type: 'Pre-Wedding', src: '/christianpre18.jpg' },
    { id: 339, type: 'Pre-Wedding', src: '/christianpre19.jpg' },
    { id: 340, type: 'Pre-Wedding', src: '/christianpre20.jpg' },
  ],
 films: [
  {
    id: 401,
    type: 'Films',
    src: '/wedding1.jpg',
    isVideo: true,
    embedUrl: 'https://www.youtube.com/embed/seoooI1hjgs'
  },
  {
    id: 402,
    type: 'Films',
    src: '/Christain-wedding1.jpg',
    isVideo: true,
    embedUrl: 'https://www.youtube.com/embed/Iw2DXhFAXPg'
  },
  {
    id: 403,
    type: 'Films',
    src: '/telungu.jpg',
    isVideo: true,
    embedUrl: 'https://www.youtube.com/embed/oAx-bpvSKWk'
  },
  {
    id: 404,
    type: 'Films',
    src: '/prewedding1.jpg',
    isVideo: true,
    embedUrl: 'https://www.youtube.com/embed/hwW5lk67JRs'
  },
  {
    id: 405,
    type: 'Films',
    src: '/engagement.jpeg',
    isVideo: true,
    embedUrl: 'https://www.youtube.com/embed/iICxRNgNWCY'
  },
  {
    id: 406,
    type: 'Films',
    src: 'git/pexels-amodita-s-frame-485464413-33078539.jpg',
    isVideo: true,
    embedUrl: 'https://www.youtube.com/embed/BzzjQ4JZ1mU'
  }
],
  telugu: [
    { id: 501, type: 'Wedding Images', src: '/telungu.jpg' },
    { id: 502, type: 'Wedding Images', src: '/telungu2.jpg' },
    { id: 503, type: 'Wedding Images', src: '/telungu3.jpg' },
    { id: 504, type: 'Wedding Images', src: '/telungu4.jpg' },
    { id: 505, type: 'Wedding Images', src: '/telungu5.jpg' },
    { id: 506, type: 'Wedding Images', src: '/telungu6.jpg' },
    { id: 507, type: 'Wedding Images', src: '/telungu7.jpg' },
    { id: 508, type: 'Wedding Images', src: '/telungu8.jpg' },
    { id: 509, type: 'Wedding Images', src: '/telungu9.jpg' },
    { id: 510, type: 'Wedding Images', src: '/telungu10.jpg' },
    { id: 511, type: 'Wedding Images', src: '/telungu11.jpg' },
    { id: 512, type: 'Wedding Images', src: '/telungu12.jpg' },
    { id: 513, type: 'Wedding Images', src: '/telungu13.jpg' },
    { id: 514, type: 'Wedding Images', src: '/telungu14.jpg' },
    { id: 515, type: 'Wedding Images', src: '/telungu15.jpg' },
    { id: 516, type: 'Wedding Images', src: '/telungu16.jpg' },
    { id: 517, type: 'Wedding Images', src: '/telungu17.jpg' },
    { id: 518, type: 'Wedding Images', src: '/telungu18.jpg' },
    { id: 519, type: 'Wedding Images', src: '/telungu19.jpg' },
    { id: 520, type: 'Wedding Images', src: '/telungu20.jpg' },
  ], 
  muslim: [],
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('main');
  const [selectedImage, setSelectedImage] = useState(null);

  const getCurrentDisplayItems = () => {
    const data = subPortfolioData[selectedCategory] || [];
    if (['tamil', 'christian', 'telugu', 'muslim'].includes(selectedCategory)) {
      return data.filter(item => item.type === 'Wedding Images');
    }
    return data;
  };

  const displayItems = getCurrentDisplayItems();

  return (
    <Box id="portfolio" sx={{ py: { xs: 12, md: 16 }, backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
        
        {selectedCategory === 'main' ? (
          /* ================= STEP 1: மெயின் கார்டுகள் ================= */
          <Box>
            
            {/* ================= TOP SECTION: TITLE & CONTENT (CENTERED) ================= */}
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              {/* சப்-டைட்டில் கோல்டு லைன்களுடன் */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 2.5 }}>
                <Box sx={{ width: "25px", height: "1px", backgroundColor: "#B38F43" }} />
                <Typography
                  sx={{
                    color: "#B38F43",
                    letterSpacing: 4,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                  }}
                >
                  Our Masterpieces
                </Typography>
                <Box sx={{ width: "25px", height: "1px", backgroundColor: "#B38F43" }} />
              </Box>

              {/* மெயின் டைட்டில் */}
              <Typography 
                sx={{ 
                  fontSize: { xs: "2.4rem", md: "3.6rem" },
                  fontFamily: "'Playfair Display', serif", 
                  fontWeight: 300, 
                  lineHeight: 1.25,
                  mb: 3,
                  background: "linear-gradient(135deg, #1A1A1A 20%, #B38F43 75%, #E11D48 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Stories by Alaiya Watts
              </Typography>

              {/* விவரிப்பு உரை (Content) */}
              <Typography
                sx={{
                  maxWidth: 650,
                  mx: "auto",
                  color: "#666666",
                  lineHeight: 1.9,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.98rem",
                }}
              >
                Explore our curated collections of love, laughter, and timeless traditions. 
                Each album represents a unique journey captured with creative elegance and cinematic precision.
              </Typography>
            </Box>

            {/* கார்டுகளின் கிரிட் */}
            <Grid container spacing={4} justifyContent="center">
              {mainCategories.map((cat) => (
                <Grid item xs={12} sm={6} md={4} key={cat.id}>
                  <Box 
                    onClick={() => setSelectedCategory(cat.id)}
                    sx={{ 
                      overflow: 'hidden', 
                      position: 'relative', 
                      cursor: 'pointer', 
                      aspectRatio: '4/3', 
                      borderRadius: '40px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 20px 40px rgba(179,143,67,0.12)'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={cat.cover}
                      alt={cat.title}
                      sx={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)', 
                        '&:hover': { transform: 'scale(1.06)' } 
                      }}
                    />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 30%, rgba(0,0,0,0.75))', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <Typography variant="h5" sx={{ color: '#FFFFFF', fontFamily: '"Playfair Display", serif', mb: 0.5 }}>{cat.title}</Typography>
                      <Typography variant="caption" sx={{ color: '#D4AF37', letterSpacing: 1, fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>{cat.tagline} →</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          /* ================= STEP 2: உள் பக்க கிரிட் (Masonry Layout) ================= */
          <Box>
            <Button 
              onClick={() => setSelectedCategory('main')} 
              sx={{ color: '#B38F43', mb: 4, textTransform: 'none', fontFamily: '"Montserrat", sans-serif', fontSize: '0.85rem', fontWeight: 600 }}
            >
              ← Back to Gallery
            </Button>
            
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" sx={{ color: '#1A1A1A', fontFamily: '"Playfair Display", serif', fontWeight: 300, letterSpacing: '1px' }}>
                {mainCategories.find(c => c.id === selectedCategory)?.title}
              </Typography>
            </Box>

            {displayItems.length > 0 ? (
              <ImageList variant="masonry" cols={3} gap={20} sx={{ columnCount: { xs: 1, sm: 2, md: 3 }, mx: 0, overflow: 'hidden' }}>
                {displayItems.map((item) => (
                  <ImageListItem 
                    key={item.id} 
                    onClick={() => setSelectedImage(item)}
                    sx={{ mb: 2.5, cursor: 'pointer', overflow: 'hidden', borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0,0,0,0.03)' }}
                  >
                    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: '16px' }}>
                      <Box
                        component="img"
                        src={item.src}
                        alt="Gallery Asset"
                        loading="lazy"
                        sx={{ 
                          width: '100%', 
                          display: 'block', 
                          transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                          '&:hover': { transform: 'scale(1.04)' }
                        }}
                      />
                      
                      {item.isVideo && (
                        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.35)' }}>
                          <Box sx={{ 
                            width: 64, 
                            height: 64, 
                            borderRadius: '50%', 
                            border: '2px solid #FFFFFF', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            color: '#FFFFFF', 
                            fontSize: '1.8rem', 
                            pl: 0.5, 
                            backdropFilter: 'blur(4px)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              backgroundColor: '#B38F43',
                              borderColor: '#B38F43'
                            }
                          }}>
                            ▶
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </ImageListItem>
                ))}
              </ImageList>
            ) : (
              <Typography sx={{ color: '#999999', textAlign: 'center', fontFamily: '"Montserrat", sans-serif', my: 8 }}>
                Coming Soon...
              </Typography>
            )}
          </Box>
        )}

        {/* ================= STEP 3: பாப்-அப் லைட்பாக்ஸ் (இமேஜ் மற்றும் வீடியோ இரண்டிற்கும்) ================= */}
        <Dialog 
          open={Boolean(selectedImage)} 
          onClose={() => setSelectedImage(null)} 
          maxWidth="lg" 
          fullWidth
          PaperProps={{ sx: { bgcolor: selectedImage?.isVideo ? '#000000' : 'transparent', boxShadow: 'none', borderRadius: '24px', overflow: 'hidden' } }}
        >
          <DialogContent sx={{ p: 0, position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', aspectRatio: selectedImage?.isVideo ? '16/9' : 'unset' }}>
            <IconButton 
              onClick={() => setSelectedImage(null)} 
              sx={{ position: 'absolute', top: 16, right: 16, zIndex: 10, color: '#FFFFFF', backgroundColor: 'rgba(0,0,0,0.4)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' } }}
            >
              <CloseIcon />
            </IconButton>
            
            {selectedImage && (
              selectedImage.isVideo ? (
                /* யூடியூப் பிளேயர் */
                <Box
                  component="iframe"
                  src={`${selectedImage.embedUrl}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  sx={{ width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                /* நார்மல் இமேஜ் வியூவர் */
                <Box 
                  component="img" 
                  src={selectedImage.src} 
                  alt={selectedImage.type} 
                  sx={{ 
                    maxWidth: '100%', 
                    maxHeight: '90vh', 
                    objectFit: 'contain', 
                    display: 'block',
                    borderRadius: '16px',
                    boxShadow: '0px 8px 30px rgba(0,0,0,0.4)'
                  }} 
                />
              )
            )}
          </DialogContent>
        </Dialog>

      </Container>
    </Box>
  );
}