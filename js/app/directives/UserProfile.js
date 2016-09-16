function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: '?h6'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<labe>Name</label>',
				'<div ng-transclude="name"></div>',
				'<labe>Position</label>',
				'<div ng-transclude="position"></div>',
				'<labe>Description</label>',
				'<div ng-transclude="description"></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);