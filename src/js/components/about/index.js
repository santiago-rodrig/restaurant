import RestaurantComponent from './restaurant/index';
import ChefComponent from './chef/index';

function aboutComponent() {
  const container = document.createElement('div');

  container.appendChild(RestaurantComponent);
  container.appendChild(ChefComponent);

  return container;
}

export default aboutComponent();
