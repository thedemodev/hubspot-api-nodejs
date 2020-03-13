/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM object like contacts, companies, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { TimelineEventTemplateTokenOption } from './timelineEventTemplateTokenOption';

/**
* State of the token definition.
*/
export class TimelineEventTemplateToken {
    /**
    * The name of the token referenced in the templates. This must be unique for the specific template. It may only contain alphanumeric characters, periods, dashes, or underscores (. - _).
    */
    'name': string;
    /**
    * The data type of the token. You can currently choose from [string, number, date, enumeration].
    */
    'type': TimelineEventTemplateToken.TypeEnum;
    /**
    * The date and time that the Event Template Token was created, as an ISO 8601 timestamp. Will be null if the template was created before Feb 18th, 2020.
    */
    'createdAt'?: Date;
    /**
    * The date and time that the Event Template Token was last updated, as an ISO 8601 timestamp. Will be null if the template was created before Feb 18th, 2020.
    */
    'updatedAt'?: Date;
    /**
    * Used for list segmentation and reporting.
    */
    'label': string;
    /**
    * The name of the CRM object property. This will populate the CRM object property associated with the event. With enough of these, you can fully build CRM objects via the Timeline API.
    */
    'objectPropertyName'?: string;
    /**
    * If type is `enumeration`, we should have a list of options to choose from.
    */
    'options': Array<TimelineEventTemplateTokenOption>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TimelineEventTemplateToken.TypeEnum"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "objectPropertyName",
            "baseName": "objectPropertyName",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<TimelineEventTemplateTokenOption>"
        }    ];

    static getAttributeTypeMap() {
        return TimelineEventTemplateToken.attributeTypeMap;
    }
}

export namespace TimelineEventTemplateToken {
    export enum TypeEnum {
        Date = <any> 'date',
        Enumeration = <any> 'enumeration',
        Number = <any> 'number',
        String = <any> 'string'
    }
}
