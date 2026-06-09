import type { INodeProperties } from 'n8n-workflow';

export const businessItemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Business Item"
					]
				}
			},
			"options": [
				{
					"name": "Get Business Item By ID",
					"value": "Get Business Item By ID",
					"action": "Returns business item by ID.",
					"description": "Returns business item by ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/BusinessItem/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/BusinessItem/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Item"
					],
					"operation": [
						"Get Business Item By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Business item with the ID specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Item"
					],
					"operation": [
						"Get Business Item By ID"
					]
				}
			}
		},
		{
			"displayName": "Laid Paper",
			"name": "LaidPaper",
			"description": "Business item by laid paper type",
			"default": "StatutoryInstrument",
			"type": "options",
			"options": [
				{
					"name": "Statutory Instrument",
					"value": "StatutoryInstrument"
				},
				{
					"name": "Proposed Negative",
					"value": "ProposedNegative"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "LaidPaper",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Business Item"
					],
					"operation": [
						"Get Business Item By ID"
					]
				}
			}
		},
];
