import { selectedTrackFillColor } from '../../../components/projects/loudness-wars';

describe('Projects | Loudness Wars', () => {
  beforeEach(() => {
    cy.visit('/projects/loudness-wars');
    cy.viewport('macbook-13');
  });

  describe('meta tags', () => {
    it('title', () => {
      const title = 'Loudness Wars | Ryan Rishi';
      cy.title().should('eq', title);
      cy.get('head meta[property="og:title"]').should('have.attr', 'content', title);
    });
  });

  describe('renders the chart', () => {
    beforeEach(() => {
      cy.get('svg [data-test-trendline="true"]').first().scrollIntoView(); // wait for chart to finish rendering
    });

    it('snapshot', () => {
      cy.percySnapshot('Projects | Loudness Wars | chart');
    });

    describe('mouseover', () => {
      let $circle;
      const radius = 1.5;

      beforeEach(() => {
        $circle = cy.get('svg circle').first();
        $circle.trigger('mouseover');
      });

      it('increases the circle radius', () => {
        $circle.should('have.attr', 'r', 2 * radius);
      });

      it('displays the tooltip', () => {
        cy.get('[data-test-tooltip]').should('be.visible');
        cy.percySnapshot('Projects | Loudness Wars | chart tooltip');
      });

      it('decreases the circle radius on mouseout', () => {
        $circle.trigger('mouseout');
        $circle.should('have.attr', 'r', radius);
      });
    });

    describe('select track', () => {
      let $circle;

      beforeEach(() => {
        $circle = cy.get('svg circle').first();
        $circle.click();
      });

      it('changes the color of the selcted track circle', () => {
        $circle.should('have.attr', 'fill', selectedTrackFillColor);
      });

      it.only('shows a Spotify embed', () => {
        $circle.should('have.attr', 'fill', selectedTrackFillColor); // wait for transition to complete
        cy.get('iframe').should('be.visible');
        cy.percySnapshot('Projects | Loudness Wars | Spotify embed');
      });
    });
  });
});
