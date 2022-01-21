/* styling */
import { FeatureListCard, FeaturesListGrid } from './index.styles';

/* Components */
import ContentLayout from '../Layout/ContentLayout';

function FeaturesSection() {
	return (
		<ContentLayout style={{ mb: '10rem' }}>
			<FeaturesListGrid>
				<FeatureListCard>
					<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M51.9381 77.8651C66.9895 77.8651 79.1911 65.582 79.1911 50.4301C79.1911 35.2782 66.9895 22.9951 51.9381 22.9951C36.8866 22.9951 24.6851 35.2782 24.6851 50.4301C24.6851 65.582 36.8866 77.8651 51.9381 77.8651Z"
							fill="#FFAD64"
						/>
						<path
							d="M66.5819 19.7651C66.5552 19.6326 66.5104 19.5044 66.4489 19.3841C66.342 19.2387 66.2258 19.1004 66.1009 18.9701C65.362 17.8692 64.3818 16.9513 63.2349 16.2861L42.1459 4.27507C40.8157 3.51766 39.3112 3.11938 37.7804 3.11938C36.2497 3.11938 34.7452 3.51766 33.4149 4.27507L23.6569 9.84107C23.1371 9.96047 22.6644 10.2316 22.2989 10.6201L12.3089 16.2861C11.1579 16.9527 10.177 17.8768 9.44295 18.9861C9.31419 19.1077 9.19764 19.2417 9.09495 19.3861C9.04881 19.5049 9.01007 19.6265 8.97895 19.7501C8.29972 21.0201 7.93615 22.4349 7.91895 23.8751V47.9121C7.92591 49.4498 8.33468 50.9589 9.10473 52.2899C9.87478 53.6209 10.9794 54.7276 12.3089 55.5001L33.3989 67.5101C34.3314 68.015 35.348 68.3461 36.3989 68.4871C36.8026 68.7675 37.2824 68.9178 37.7739 68.9178C38.2655 68.9178 38.7453 68.7675 39.1489 68.4871C40.1936 68.3433 41.2038 68.0123 42.1309 67.5101L63.2369 55.4821C64.5672 54.7146 65.6728 53.6115 66.4432 52.2829C67.2135 50.9543 67.6217 49.4468 67.6269 47.9111V23.8731C67.6368 22.4368 67.2769 21.0221 66.5819 19.7651ZM36.1189 9.02907C36.6217 8.73538 37.1937 8.58108 37.7759 8.58207C38.3632 8.58111 38.9404 8.73532 39.4489 9.02907L59.3089 20.3441L51.3569 24.9331L29.8869 12.5751L36.1189 9.02907ZM37.7759 32.7531L16.2359 20.3441L24.3539 15.7221L45.8739 28.0811L37.7759 32.7531ZM15.0099 50.7281C14.5134 50.4441 14.1003 50.0343 13.8124 49.5399C13.5245 49.0456 13.3719 48.4841 13.3699 47.9121V25.0001L35.0559 37.5081V62.1431L15.0099 50.7281ZM60.5519 50.7281L40.5059 62.1431V37.5081L62.1919 25.0001V47.8941C62.1924 48.469 62.041 49.0339 61.753 49.5316C61.465 50.0292 61.0507 50.442 60.5519 50.7281Z"
							fill="#333237"
						/>
						<path
							d="M11.067 31.2282C17.0875 31.2282 21.968 26.3181 21.968 20.2612C21.968 14.2043 17.0875 9.29419 11.067 9.29419C5.04656 9.29419 0.166016 14.2043 0.166016 20.2612C0.166016 26.3181 5.04656 31.2282 11.067 31.2282Z"
							fill="#FB8351"
						/>
					</svg>

					<h3>Worldwide Shipping</h3>
					<p>All our orders ship from various warehouses to ensure fast shipping times all over the world</p>
				</FeatureListCard>

				<FeatureListCard>
					<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M53.1401 64.8711C64.0803 64.8711 72.9491 55.9427 72.9491 44.9291C72.9491 33.9154 64.0803 24.9871 53.1401 24.9871C42.1998 24.9871 33.3311 33.9154 33.3311 44.9291C33.3311 55.9427 42.1998 64.8711 53.1401 64.8711Z"
							fill="#FFAD64"
						/>
						<path
							d="M38.0556 13.3601C32.1082 13.3691 26.407 15.7357 22.2016 19.9411C17.9962 24.1465 15.6296 29.8477 15.6206 35.7951V51.3001C15.6222 53.1331 16.351 54.8905 17.6471 56.1866C18.9432 57.4827 20.7007 58.2115 22.5336 58.2131H24.7606C26.5927 58.2089 28.3486 57.4792 29.6442 56.1837C30.9397 54.8881 31.6694 53.1323 31.6736 51.3001V44.6531C31.672 42.8202 30.9432 41.0627 29.6471 39.7666C28.351 38.4705 26.5936 37.7417 24.7606 37.7401H20.5896V35.7961C20.5896 31.1638 22.4298 26.7213 25.7053 23.4458C28.9808 20.1703 33.4233 18.3301 38.0556 18.3301C42.6879 18.3301 47.1304 20.1703 50.4059 23.4458C53.6814 26.7213 55.5216 31.1638 55.5216 35.7961V47.6121C55.5208 48.1274 55.3157 48.6214 54.9513 48.9858C54.5869 49.3502 54.0929 49.5553 53.5776 49.5561H49.7556C49.4094 49.1772 48.9886 48.8739 48.5197 48.6652C48.0508 48.4565 47.5439 48.3468 47.0306 48.3431H43.3406C42.3621 48.3431 41.4237 48.7318 40.7317 49.4237C40.0398 50.1157 39.6511 51.0541 39.6511 52.0326C39.6511 53.0111 40.0398 53.9496 40.7317 54.6415C41.4237 55.3334 42.3621 55.7221 43.3406 55.7221H47.0296C47.5435 55.7221 48.0516 55.6142 48.521 55.4052C48.9905 55.1962 49.4107 54.8909 49.7546 54.5091H53.5766C55.4087 54.5049 57.1646 53.7752 58.4602 52.4797C59.7557 51.1841 60.4854 49.4283 60.4896 47.5961V35.7961C60.4809 29.8487 58.1146 24.1474 53.9093 19.9418C49.7041 15.7362 44.003 13.3694 38.0556 13.3601ZM24.7606 42.7081C25.2759 42.7089 25.7699 42.914 26.1343 43.2784C26.4987 43.6428 26.7038 44.1368 26.7046 44.6521V51.2991C26.7038 51.8144 26.4987 52.3084 26.1343 52.6728C25.7699 53.0372 25.2759 53.2423 24.7606 53.2431H22.5506C22.0353 53.2423 21.5413 53.0372 21.1769 52.6728C20.8125 52.3084 20.6074 51.8144 20.6066 51.2991V42.7071L24.7606 42.7081Z"
							fill="#333237"
						/>
						<path
							d="M21.7648 34.17C26.6934 34.17 30.6888 30.1746 30.6888 25.246C30.6888 20.3174 26.6934 16.322 21.7648 16.322C16.8362 16.322 12.8408 20.3174 12.8408 25.246C12.8408 30.1746 16.8362 34.17 21.7648 34.17Z"
							fill="#FB8351"
						/>
					</svg>

					<h3>Friendly Support</h3>
					<p>Got a question? Contact our friendly support staff and they&apos;ll get back to you as soon as possible</p>
				</FeatureListCard>

				<FeatureListCard>
					<svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M48.1393 78.6211C63.2724 78.6211 75.5403 66.2713 75.5403 51.0371C75.5403 35.8029 63.2724 23.4531 48.1393 23.4531C33.0061 23.4531 20.7383 35.8029 20.7383 51.0371C20.7383 66.2713 33.0061 78.6211 48.1393 78.6211Z"
							fill="#FFAD64"
						/>
						<path
							d="M60.5491 14.3252H15.5791C13.5905 14.327 11.684 15.1178 10.2778 16.5239C8.87173 17.9301 8.08095 19.8366 8.0791 21.8252V51.8082C8.08095 53.7968 8.87173 55.7033 10.2778 57.1095C11.684 58.5156 13.5905 59.3063 15.5791 59.3082H60.5491C62.5377 59.3063 64.4442 58.5156 65.8504 57.1095C67.2565 55.7033 68.0472 53.7968 68.0491 51.8082V21.8252C68.0472 19.8366 67.2565 17.9301 65.8504 16.5239C64.4442 15.1178 62.5377 14.327 60.5491 14.3252V14.3252ZM15.5791 19.3252H60.5491C61.2121 19.3252 61.848 19.5886 62.3169 20.0574C62.7857 20.5263 63.0491 21.1622 63.0491 21.8252V29.3252H13.0791V21.8252C13.0791 21.1622 13.3425 20.5263 13.8113 20.0574C14.2802 19.5886 14.9161 19.3252 15.5791 19.3252V19.3252ZM60.5531 54.3052H15.5791C14.9161 54.3052 14.2802 54.0418 13.8113 53.573C13.3425 53.1041 13.0791 52.4682 13.0791 51.8052V34.3152H63.0501V51.8052C63.0493 52.4679 62.7854 53.1032 62.3165 53.5714C61.8475 54.0396 61.2118 54.3025 60.5491 54.3022L60.5531 54.3052Z"
							fill="#333237"
						/>
						<path
							d="M24.3692 23.0701C30.4222 23.0701 35.3292 18.1332 35.3292 12.0431C35.3292 5.95307 30.4222 1.01611 24.3692 1.01611C18.3161 1.01611 13.4092 5.95307 13.4092 12.0431C13.4092 18.1332 18.3161 23.0701 24.3692 23.0701Z"
							fill="#FB8351"
						/>
					</svg>

					<h3>Secure Payments</h3>
					<p>Pay with full confidence thanks to our secure and encrypted payment methods</p>
				</FeatureListCard>
			</FeaturesListGrid>
		</ContentLayout>
	);
}

export default FeaturesSection;
