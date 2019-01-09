import React, { Component } from 'react';
import PageContainer from './styles/PageContainer';

class About extends Component {
  render() {
    return (
      <PageContainer>
        <div>
          <p>
            Hey, this is Shini Ko. I'm a graduating Applied Maths and Computer
            Engineering student based in Ontario, Canada. Currently, I'm
            developing my skills to be a full stack web developer with a focus
            on the front end.
          </p>
          <p>
            I always wanted to be an artist. Although I have always had an
            affinity to maths and science, computer programming was one of the
            last things I'd imagine myself doing until a few years ago. The
            preconceived notion of it being dry, aesthetically unappealing and
            predominantly male had turned me off. Nowadays, I lose track of time
            while tinkering in front of my computer. I realized that programming
            is a powerful tool to create solutions to complex problems using
            nothing more than a laptop. I carry a journal and jot down any
            random ideas that I have during the day. Some of the ideas are
            brought to fruition by coding. I want to show that coding doesn't
            have to be ugly and boring, and hopefully inspire other to realize
            their passion.
          </p>
          <p>
            I've lived in Japan, China and Canada for roughly 1/3 of my life
            each so far. Growing up in different countries -- being bombarded by
            cultural shocks starting at a young age -- has made me develop a
            unique world outlook and question why we do things we do a little
            more than usual. "Existential crisis" has been a constant theme in
            my life and here are some values I live by.
          </p>
        </div>
      </PageContainer>
    );
  }
}

export default About;
