var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'http://i.ebayimg.com/00/s/NDAwWDI5Mg==/z/cg8AAOxySoJTVkWq/$_35.JPG?set_id=2'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'https://i1.fdbimg.pl/zja8r5u1/1070x1500_ntfk9k.jpg'
    },
    {
      id: 3,
      title: 'Terminator',
      desc: 'Film o terminatorze',
      img: 'https://www.filmfan.pl/obrazki/plakaty/1984/terminator-1984_20140414165137.jpg'
    },
    {
      id: 4,
      title: 'Hobbit',
      desc: 'Film o hobbicie',
      img: 'https://naekranie.pl/wp-content/uploads/2014/12/hobbit-bitwa-pieciu-armii-plakat-teaser-1406807266.jpg'
    }
  ];

  var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id}, 
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {description: this.props.movie.desc}),
                React.createElement('img', {src: this.props.movie.img}),
            )
        )
    },
});

    var MovieTitle = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired,
        },
        render: function() {
            return (
                React.createElement('h2', {}, this.props.title)
            )
        },
    });

    var MovieDescription = React.createClass({
      propTypes: {
          description: React.PropTypes.string.isRequired,
      },
      render: function() {
          return (
              React.createElement('p', {}, this.props.description)
          )
      },
    });

    var MovieImage = React.createClass({
        propTypes: {
            image: React.PropTypes.object.isRequired,
        },
        render: function() {
            return (
                React.createElement('img', {src: this.props.img})
            )
        },
      });
    
    var MoviesList = React.createClass({
        propTypes: {
            movies: React.PropTypes.array.isRequired,
        },
        render: function() {
            return (
                React.createElement('div', {},
                    React.createElement('h1', {}, 'Lista filmów'),
                    React.createElement('ul', {}, moviesElements(this.props.movies))
                )
            )
        },
    });
  
    var moviesElements = function(movies) {
        return movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
        });
    };
    
    var element = React.createElement(MoviesList, {movies: movies});
    
    ReactDOM.render(element, document.getElementById('app'));