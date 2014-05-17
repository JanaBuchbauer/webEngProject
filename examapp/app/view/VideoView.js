Ext.define('ExamApp.view.VideoView', {
	extend: 'Ext.form.Panel',
	xtype: 'videoview',
	
	requires: [
		'Ext.form.FieldSet'
	],
	
	config: {
		title: 'Videodetails',
		
		items: [
			{
				xtype: 'fieldset',
				title: 'Videodetails',
				items: [
					{
						name: 'playcount',
						xtype: 'textfield',
						label: 'Playcount',
						disabled: true
					}, {
						name: 'name',
						xtype: 'textfield',
						label: 'Title',
						disabled: true
					}, {
						id: 'artist',
						name: 'artist',
						xtype: 'textfield',
						label: 'Singer',
						disabled: true
					}
				]
			}, {
				xtype: 'panel',
				id: 'videopanel'
			}
		]
	}
});