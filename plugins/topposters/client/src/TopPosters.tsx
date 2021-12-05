import { Trans } from "@lingui/macro"
import React from "react"
import { Card, CardBody, CardHeader } from "@misago/UI/Card"

const TopPosters: React.FC = () => (
  <div className="top-posters">
    <Card>
      <CardHeader title={<Trans id="topposters.title">Top Posters</Trans>} />
    <CardBody>
      TOP POSTERS PLUGIN!
    </CardBody>
    </Card>
  </div>
)

export default TopPosters