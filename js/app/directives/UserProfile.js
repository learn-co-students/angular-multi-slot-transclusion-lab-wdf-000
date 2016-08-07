function UserProfile() {
	return {
		transclude: {
      name: 'h4',
      position: 'h6',
      description: 'p'
    },
		template: [
			'<div>',
				'<h3>User Profile</h3>',
        '<h5>Name</h5>',
				'<div ng-transclude="name"></div>',
        '<h5>Position</h5>',
        '<div ng-transclude="position"></div>',
        '<h5>Description</h5>',
        '<div ng-transclude="description"></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
