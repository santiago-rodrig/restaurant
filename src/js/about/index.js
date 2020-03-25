import RestaurantComponent from './restaurant/index';

function aboutComponent() {
  const container = document.createElement('div');

  container.appendChild(RestaurantComponent);

  return container;
}

export default aboutComponent();
