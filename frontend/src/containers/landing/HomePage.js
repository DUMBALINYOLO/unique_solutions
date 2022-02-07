import React from 'react';
import Hero from '../../public/home/HeroBox'
import Testimonials from '../../public/home/TestMonialsBox'
import Partners from '../../public/home/Partners'
import Standards from '../../public/home/Standards';
import Statistics from '../../public/home/Statistics';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <section id="banner">
          <Hero />
        </section>
        <section id="princip">
          <Standards />
        </section>
        <section id="stats">
          <Statistics />
        </section>
        <section id="feature">
          <Testimonials />
        </section>
        <section id="partners">
          <Partners />
        </section>
      </div>
    );
  }
}

export default HomePage;
