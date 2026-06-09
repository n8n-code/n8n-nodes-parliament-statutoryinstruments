import type { INodeProperties } from 'n8n-workflow';

export const proposedNegativeStatutoryInstrumentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					]
				}
			},
			"options": [
				{
					"name": "Get Proposed Negative Statutory Instruments",
					"value": "Get Proposed Negative Statutory Instruments",
					"action": "Returns a list of proposed negative statutory instruments.",
					"description": "Returns a list of proposed negative statutory instruments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/ProposedNegativeStatutoryInstrument"
						}
					}
				},
				{
					"name": "Get Proposed Negative Statutory Instrument By Id",
					"value": "Get Proposed Negative Statutory Instrument By Id",
					"action": "Returns proposed negative statutory instrument by ID.",
					"description": "Returns proposed negative statutory instrument by ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/ProposedNegativeStatutoryInstrument/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Business Items By Proposed Negative Statutory Instrument Id",
					"value": "Get Business Items By Proposed Negative Statutory Instrument Id",
					"action": "Returns business items belonging to a proposed negative statutory instrument.",
					"description": "Returns business items belonging to a proposed negative statutory instrument.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/ProposedNegativeStatutoryInstrument/{{$parameter[\"id\"]}}/BusinessItems"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/ProposedNegativeStatutoryInstrument",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Proposed negative statutory instruments with the name provided",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Recommended For Procedure Change",
			"name": "RecommendedForProcedureChange",
			"description": "Proposed negative statutory instruments recommended for procedure change",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "RecommendedForProcedureChange",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Department Id",
			"name": "DepartmentId",
			"description": "Proposed negative statutory instruments with the department ID specified",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "DepartmentId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Laying Body Id",
			"name": "LayingBodyId",
			"description": "Proposed negative statutory instruments with the laying body ID specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "LayingBodyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "Skip",
			"description": "The number of records to skip from the first, default is 0",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "Skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Take",
			"name": "Take",
			"description": "The number of records to return, default is 20",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "Take",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/ProposedNegativeStatutoryInstrument/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instrument By Id"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Proposed negative statutory instrument with the ID specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Proposed Negative Statutory Instrument By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/ProposedNegativeStatutoryInstrument/{id}/BusinessItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Business Items By Proposed Negative Statutory Instrument Id"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Business items belonging to proposed negative statutory instrument with the ID specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Proposed Negative Statutory Instrument"
					],
					"operation": [
						"Get Business Items By Proposed Negative Statutory Instrument Id"
					]
				}
			}
		},
];
