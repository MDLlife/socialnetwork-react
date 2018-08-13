import React, {Component, ReactClass} from 'util/safe-react';
import * as _ from "lodash";

import Date from "components/Date"

class SearchCommentsList extends React.Component {
	
	render() {
		const {hits, itemComponent} = this.props;
		
		if (!hits || hits.length === 0) {
			return ("")
		}
		let counter = 0
		return (
			<div>
				<table className="sk-table sk-table-striped" style={{width: '100%', boxSizing: 'border-box'}}>
					<thead>
					<tr>
						<th>Avatar</th>
						<th>Profile</th>
						<th>Name</th>
						<th>Updated At</th>
					</tr>
					</thead>
					<tbody>
					{_.map(hits, hit => {
						const _hit = _.extend({}, hit._source, hit.highlight)
                        return (
							<tr key={(counter++) + _hit.id}>
								<td><img style={{height: '24px', width: '24px'}}
								         src={_.get(_hit, "highlight.avatarurl", _hit.avatarurl)}/></td>
								<td>
									<span dangerouslySetInnerHTML={{__html: _.get(_hit, "highlight.talent_role", _hit.talent_role)}}/>
								</td>

								<td>
                                    <span
                                       dangerouslySetInnerHTML={{__html: _.get(_hit, "highlight.comment", _hit.name)}}/>
								</td>

								<td>
									<Date style={{fontSize: '14px'}} date={_.get(_hit, "highlight.title", _hit.updated_at)}/>
								</td>
							</tr>  )
					})}
					</tbody>
				</table>
			</div>
		)
	}
}

export {SearchCommentsList}