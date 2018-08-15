<template>
	<div>
		<div class="cusapply">
			<div class="container">
				<h3 class="custit">定制方案</h3>
				<div class="cusform">
					<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140">
						<div class="cusitm clearfix">
							<div class="col-md-6">
								<FormItem label="标题" prop="title">
									<Input v-model="formValidate.title" placeholder="请输入标题"></Input>
								</FormItem>
							</div>
							<div class="col-md-6">
								<FormItem label="预计规模说明" prop="scale">
									<Input v-model="formValidate.scale" placeholder="请输入规模说明"></Input>
								</FormItem>
							</div>
						</div>
						<div class="cusitm clearfix">
							<div class="col-md-6">
								<FormItem label="分类" prop="classification">
									<Select v-model="formValidate.classification" placeholder="请选择分类">
										<Option value="beijing">解决分类</Option>
										<Option value="shanghai">解决分类1</Option>
									</Select>
								</FormItem>
							</div>
							<div class="col-md-6">
								<FormItem label="联系人" prop="contacts">
									<Input v-model="formValidate.contacts" placeholder="请输入联系人"></Input>
								</FormItem>
							</div>
						</div>
						<div class="cusitm clearfix">
							<div class="col-md-6">
								<FormItem label="所在地区" prop="citys">
									<al-selector v-model="res_s" level="2" />
								</FormItem>
							</div>
							<div class="col-md-6">
								<FormItem label="手机号码" prop="phone">
									<Input v-model="formValidate.phone" placeholder="请输入手机号码"></Input>
								</FormItem>
							</div>
						</div>

						<div class="cusitm clearfix">
							<div class="col-md-6">
								<FormItem label="团队说明" prop="team">
									<Input v-model="formValidate.team" placeholder="请输入团队说明"></Input>
								</FormItem>
							</div>
							<div class="col-md-6">
								<FormItem label="邮件" prop="email">
									<Input v-model="formValidate.email" placeholder="请输入邮件地址"></Input>
								</FormItem>
							</div>
						</div>
						<div class="cusitm clearfix">
							<div class="col-md-6">
								<FormItem label="项目说明" prop="projectdesc">
									<Input v-model="formValidate.projectdesc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入项目说明"></Input>
								</FormItem>
							</div>
							<div class="col-md-6">
								<FormItem label="需求说明" prop="demanddesc">
									<Input v-model="formValidate.demanddesc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入需求说明"></Input>
								</FormItem>
							</div>
						</div>
						<FormItem class="cusitm submititm">
							<Button type="primary" @click="handleSubmit('formValidate','success')" class="submitapply">提交申请</Button>
						</FormItem>
					</Form>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	$(function() {
		var wheight = $(window).height();
		$(".cusapply").css("height", wheight + "px"); //背景图高
	});
	export default {
		name: 'App',
		components: {

		},
		data() {
			return {
				res_s: [],
				cusapplyModel: false,
				formValidate: {
					title: '',
					scale: '',
					classification: '',
					contacts: '',
					citys: '',
					phone: '',
					team: '',
					email: '',
					projectdesc: '',
					demanddesc: '',
				},
				ruleValidate: {
					title: [{
						//						required: true,
						//						message: '请输入标题',
						//						trigger: 'change'
					}],
					scale: [{
						//						required: true,
						//						message: '请输入规模说明',
						//						trigger: 'change'
					}],
					classification: [{
						//						required: true,
						//						message: '请选择分类',
						//						trigger: 'change'
					}],
					contacts: [{
						//						required: true,
						//						message: '联系人不能为空',
						//						trigger: 'change'
					}],
					citys: [{
						//						required: true,
						//						message: '请选择城市',
						//						trigger: 'change'
					}],
					phone: [{
						//						required: true,
						//						type: 'number',
						//						message: '请输入手机号码',
						//						trigger: 'change'
					}],

					team: [{
						//						required: true,
						//						type: 'string',
						//						message: '请输入团队说明',
						//						trigger: 'change'
					}],
					email: [{
						//						required: true,
						//						message: '请输入邮件地址',
						//						trigger: 'change'
					}],
					projectdesc: [{
							//							required: true,
							//							message: 'Please enter a personal introduction',
							//							trigger: 'blur'
						},
						//{ type: 'string', min: 5, message: 'Introduce no less than 20 words', trigger: 'blur' }
					],
					demanddesc: [{
							//							required: true,
							//							message: 'Please enter a personal introduction',
							//							trigger: 'blur'
						},
						//{ type: 'string', min: 5, message: 'Introduce no less than 20 words', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			handleSubmit(name, type) {
				this.$refs[name].validate((valid) => {
					if(valid) {
						//		        this.$Message.success('Success!');
						this.cusapplyModel = true;
						const content = "<div class='scuon'>" +
							"<i class='iscuccess'></i>" +
							"<h3>提交成功</h3>" +
							"<p>请保持手机畅通，我司相关人员将在1-2个工作日</p>" +
							" <p>内与您取得联系，请耐心等待！</p>" +
							"</div>";
						switch(type) {
							case 'success':
								this.$Modal.success({
									//                          title: title,
									content: content
								});
								break;
						}
					} else {
						this.$Message.error('提交失败!');
					}
				});
			},
			//		 对话窗
			ok() {
				//              this.$Message.info('Clicked ok');
			}
		}

	}
</script>

<style>

</style>