function UserProfile() {
  return {
    transclude: {
      name: 'h4',
      position: '?h6',
      description: '?p'
    },
    template: [
      '<div>',
      '<h3>User Profile</h3>',
      '<h4>Name: <span ng-transclude="name"></span></h4>',
      '<h6>Position: <span ng-transclude="position"></span></h6>',
      '<p>Description: <span ng-transclude="description"></span></p>',
      '</div>'
    ].join('')
  }
}

angular
  .module('app')
  .directive('userProfile', UserProfile);
