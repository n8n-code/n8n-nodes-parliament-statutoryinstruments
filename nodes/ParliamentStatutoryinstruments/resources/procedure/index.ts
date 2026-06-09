import type { INodeProperties } from 'n8n-workflow';

export const procedureDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Procedure"
					]
				}
			},
			"options": [
				{
					"name": "Get Procedures v1",
					"value": "Get Procedures v1",
					"action": "Returns all procedures.",
					"description": "Returns all procedures.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Procedure"
						}
					}
				},
				{
					"name": "Get Procedures By ID v1",
					"value": "Get Procedures By ID v1",
					"action": "Returns procedure by ID.",
					"description": "Returns procedure by ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/Procedure/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/Procedure",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Procedure"
					],
					"operation": [
						"Get Procedures v1"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/Procedure/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Procedure"
					],
					"operation": [
						"Get Procedures By ID v1"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Procedure with the ID specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Procedure"
					],
					"operation": [
						"Get Procedures By ID v1"
					]
				}
			}
		},
];
