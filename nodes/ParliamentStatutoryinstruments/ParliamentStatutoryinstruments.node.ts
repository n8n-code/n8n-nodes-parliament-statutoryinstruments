import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { businessItemDescription } from './resources/business-item';
import { layingBodyDescription } from './resources/laying-body';
import { procedureDescription } from './resources/procedure';
import { proposedNegativeStatutoryInstrumentDescription } from './resources/proposed-negative-statutory-instrument';
import { statutoryInstrumentDescription } from './resources/statutory-instrument';

export class ParliamentStatutoryinstruments implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'parliament-statutoryinstruments',
		name: 'N8nDevParliamentStatutoryinstruments',
		icon: { light: 'file:./parliament-statutoryinstruments.svg', dark: 'file:./parliament-statutoryinstruments.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API exposing details of the various types of Statutory Instruments laid before Parliament',
		defaults: { name: 'parliament-statutoryinstruments' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevParliamentStatutoryinstrumentsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Business Item",
					"value": "Business Item",
					"description": ""
				},
				{
					"name": "Laying Body",
					"value": "Laying Body",
					"description": ""
				},
				{
					"name": "Procedure",
					"value": "Procedure",
					"description": ""
				},
				{
					"name": "Proposed Negative Statutory Instrument",
					"value": "Proposed Negative Statutory Instrument",
					"description": ""
				},
				{
					"name": "Statutory Instrument",
					"value": "Statutory Instrument",
					"description": ""
				}
			],
			"default": ""
		},
		...businessItemDescription,
		...layingBodyDescription,
		...procedureDescription,
		...proposedNegativeStatutoryInstrumentDescription,
		...statutoryInstrumentDescription
		],
	};
}
