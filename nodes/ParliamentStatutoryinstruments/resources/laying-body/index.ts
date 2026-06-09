import type { INodeProperties } from 'n8n-workflow';

export const layingBodyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Laying Body"
					]
				}
			},
			"options": [
				{
					"name": "Get Laying Bodies",
					"value": "Get Laying Bodies",
					"action": "Returns all laying bodies.",
					"description": "Returns all laying bodies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/LayingBody"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/LayingBody",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Laying Body"
					],
					"operation": [
						"Get Laying Bodies"
					]
				}
			}
		},
];
