const React = require('react')
const Default = require('./layouts/default.jsx')
const HeroBanner = require('./components/LG-homeHeroBanner.jsx')
const CategoryBanner = require('./components/LG-category.jsx')
const MiddleContent = require('./components/LG-middlecontent.jsx')
const HomeSlider = require('./components/homeSlider.jsx')
const CatSlider = require('./components/catSlider.jsx')
const WhatsHot = require('./components/whatsHot.jsx')
const Footer = require('./components/footer.jsx')

const Home = (props) => {
  return (
    <Default>
      <HeroBanner />
      <CategoryBanner />
      <HomeSlider />
      <CatSlider />
      <WhatsHot whats={props.whatsHot} list={props.hot} />
      <WhatsHot whats={props.whatsNew} list={props.new} />
      <MiddleContent />
      {/* <div className="uk-container">
        <div className="spacer"></div>
      </div> */}
      <Footer />
    </Default>
  )
}

module.exports = Home
