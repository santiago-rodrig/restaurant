import RestaurantComponent from './restaurant/index';
import ChefComponent from './chef/index';
import TeamComponent from './team/index';

function aboutComponent() {
  const container = document.createElement('div');

  container.appendChild(RestaurantComponent);
  container.appendChild(ChefComponent);
  container.appendChild(TeamComponent);

  return container;
}

export default aboutComponent();
