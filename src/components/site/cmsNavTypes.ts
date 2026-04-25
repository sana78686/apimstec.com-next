/** CMS page row from /api/public/pages — apimstec-react parity. */
export type CmsNavPage = {
  id: number
  title: string
  slug: string
  placement?: string
  parent_id?: number
  sort_order?: number
}

/** Header/footer trees: root nodes with ordered children. */
export type CmsNavTreeNode = CmsNavPage & { children: CmsNavPage[] }
