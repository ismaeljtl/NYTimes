import { Multimedia } from "./multimedia";
import { RelatedUrl } from "./relatedUrl";

export interface Result {
    slug_name: string;
    section: string;
    subsection: string;
    title: string;
    abstract: string;
    url: string;
    byline: string;
    thumbnail_standard: string;
    item_type: string;
    source: string;
    updated_date: Date;
    created_date: Date;
    published_date: Date;
    first_published_date: Date;
    material_type_facet: string;
    kicker: string;
    subheadline: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    related_urls: RelatedUrl[];
    multimedia: Multimedia[];
}