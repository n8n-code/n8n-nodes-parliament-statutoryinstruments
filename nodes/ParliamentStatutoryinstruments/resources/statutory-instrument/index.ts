import type { INodeProperties } from 'n8n-workflow';

export const statutoryInstrumentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					]
				}
			},
			"options": [
				{
					"name": "Get Statutory Instruments",
					"value": "Get Statutory Instruments",
					"action": "Returns a list of statutory instruments.",
					"description": "Returns a list of statutory instruments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/StatutoryInstrument"
						}
					}
				},
				{
					"name": "Get Statutory Instrument By Id",
					"value": "Get Statutory Instrument By Id",
					"action": "Returns a statutory instrument by ID.",
					"description": "Returns a statutory instrument by ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/StatutoryInstrument/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Business Items By Statutory Instrument Id",
					"value": "Get Business Items By Statutory Instrument Id",
					"action": "Returns business items belonging to statutory instrument with ID.",
					"description": "Returns business items belonging to statutory instrument with ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/StatutoryInstrument/{{$parameter[\"id\"]}}/BusinessItems"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/StatutoryInstrument",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Statutory instruments with the name specified",
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
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Statutory Instrument Type",
			"name": "StatutoryInstrumentType",
			"description": "Statutory instruments where the statutory instrument type is the type provided",
			"default": "DraftAffirmative",
			"type": "options",
			"options": [
				{
					"name": "Draft Affirmative",
					"value": "DraftAffirmative"
				},
				{
					"name": "Draft Negative",
					"value": "DraftNegative"
				},
				{
					"name": "Made Affirmative",
					"value": "MadeAffirmative"
				},
				{
					"name": "Made Negative",
					"value": "MadeNegative"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "StatutoryInstrumentType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Scheduled Debate",
			"name": "ScheduledDebate",
			"description": "Statutory instrument which contains a scheduled debate",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "ScheduledDebate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Motion To Stop",
			"name": "MotionToStop",
			"description": "Statutory instruments which contains a motion to stop",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "MotionToStop",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Concerns Raised By Committee",
			"name": "ConcernsRaisedByCommittee",
			"description": "Statutory instruments which contains concerns raised by committee",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "ConcernsRaisedByCommittee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Parliamentary Process Concluded",
			"name": "ParliamentaryProcessConcluded",
			"description": "Statutory instruments where the parliamentary process is concluded or notconcluded",
			"default": "NotConcluded",
			"type": "options",
			"options": [
				{
					"name": "Not Concluded",
					"value": "NotConcluded"
				},
				{
					"name": "Concluded",
					"value": "Concluded"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "ParliamentaryProcessConcluded",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Department Id",
			"name": "DepartmentId",
			"description": "Statutory instruments with the department ID specified",
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
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "Laying Body Id",
			"name": "LayingBodyId",
			"description": "Statutory instruments with the laying body ID specified",
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
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "House",
			"name": "House",
			"description": "Statutory instruments laid in the house specified",
			"default": "Commons",
			"type": "options",
			"options": [
				{
					"name": "Commons",
					"value": "Commons"
				},
				{
					"name": "Lords",
					"value": "Lords"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "House",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
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
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
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
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instruments"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/StatutoryInstrument/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instrument By Id"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Statutory instrument with the ID specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Statutory Instrument By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/StatutoryInstrument/{id}/BusinessItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Business Items By Statutory Instrument Id"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Business items belonging to statutory instrument with the ID specified",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Statutory Instrument"
					],
					"operation": [
						"Get Business Items By Statutory Instrument Id"
					]
				}
			}
		},
];
