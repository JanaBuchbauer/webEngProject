Ext.define('ExamApp.model.Chart', {
    extend: 'Ext.data.Model',
 
    config: {
        idProperty: 'name',
		
        fields: [
            'playcount',
            'name', // Titel des Songs
			'artist' // Sänger
        ]
    }
});